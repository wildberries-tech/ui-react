export interface IBodyScrollOptions {
    reserveScrollBarGap?: boolean | undefined,
    allowTouchMove?: ((el: EventTarget) => boolean) | undefined
}

interface IBodyStyleType {
    position: string,
    top: string,
    left: string,
    width: string,
    height: string,
    overflow: string
}

interface ILock {
    targetElement: HTMLElement,
    options: IBodyScrollOptions
}

// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/no-unnecessary-condition
const isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);

export function useBodyScrollLock() {
    // Older browsers don't support event options, feature detect it.
    let hasPassiveEvents = false;

    if(typeof window !== 'undefined') {
        const passiveTestOptions: { passive: undefined } = {
            get passive() {
                hasPassiveEvents = true;

                return undefined;
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).addEventListener('testPassive', null, passiveTestOptions);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).removeEventListener('testPassive', null, passiveTestOptions);
    }

    type THandleScrollEvent = TouchEvent;

    let locks: Array<ILock> = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locksIndex = new Map<any, number>();
    let documentListenerAdded = false;
    let initialClientY = -1;
    let previousBodyOverflowSetting: string | undefined;
    let htmlStyle:
    | {
        height: string,
        overflow: string
    }
    | undefined;
    let bodyStyle: IBodyStyleType | undefined;

    let previousBodyPaddingRight: string | undefined;

    // returns true if `el` should be allowed to receive touchmove events.
    const allowTouchMove = (el: EventTarget): boolean => locks.some((lock) => {
        if(lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
            return true;
        }

        return false;
    });

    const preventDefault = (rawEvent: THandleScrollEvent): boolean => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unnecessary-condition
        const e: any = rawEvent || window.event;

        // For the case whereby consumers adds a touchmove event listener to document.
        // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
        // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
        // the touchmove event on document will break.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if(allowTouchMove(e?.target)) {
            return true;
        }

        // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
        if(e.touches.length > 1) {
            return true;
        }

        if(!isIosDevice && e.preventDefault) {
            e.preventDefault();
        }

        return false;
    };

    const setOverflowHidden = (options?: IBodyScrollOptions) => {
        // If previousBodyPaddingRight is already set, don't set it again.
        if(previousBodyPaddingRight === undefined) {
            const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
            const scrollBarGap = window.innerWidth - document.documentElement.getBoundingClientRect().width;

            if(reserveScrollBarGap && scrollBarGap > 0) {
                const computedBodyPaddingRight = parseInt(
                    window
                        .getComputedStyle(document.body)
                        .getPropertyValue('padding-right'),
                    10
                );

                previousBodyPaddingRight = document.body.style.paddingRight;

                document.body.style.paddingRight = `${
                    computedBodyPaddingRight + scrollBarGap
                }px`;
            }
        }

        // If previousBodyOverflowSetting is already set, don't set it again.
        if(previousBodyOverflowSetting === undefined) {
            previousBodyOverflowSetting = document.body.style.overflow;

            document.body.style.overflow = 'hidden';
        }
    };

    const restoreOverflowSetting = () => {
        if(previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;

            // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
            // can be set again.
            previousBodyPaddingRight = undefined;
        }

        if(previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;

            // Restore previousBodyOverflowSetting to undefined
            // so setOverflowHidden knows it can be set again.
            previousBodyOverflowSetting = undefined;
        }
    };

    const setPositionFixed = () => window.requestAnimationFrame(() => {
        const $html = document.documentElement;
        const $body = document.body;

        // If bodyStyle is already set, don't set it again.
        if(bodyStyle === undefined) {
            htmlStyle = { ...$html.style };

            bodyStyle = { ...$body.style };

            // Update the dom inside an animation frame
            const { scrollY, scrollX, innerHeight } = window;

            $html.style.height = '100%';

            $html.style.overflow = 'hidden';

            $body.style.position = 'fixed';

            $body.style.top = `${-scrollY}px`;

            $body.style.left = `${-scrollX}px`;

            $body.style.width = '100%';

            $body.style.height = 'auto';

            $body.style.overflow = 'hidden';

            setTimeout(
                () => window.requestAnimationFrame(() => {
                    // Attempt to check if the bottom bar appeared due to the position change
                    const bottomBarHeight = innerHeight - window.innerHeight;

                    if(bottomBarHeight && scrollY >= innerHeight) {
                        // Move the content further up so that the bottom bar doesn't hide it
                        $body.style.top = `${-(scrollY + bottomBarHeight)}px`;
                    }
                }),
                300
            );
        }
    });

    const restorePositionSetting = () => {
        if(bodyStyle !== undefined) {
            // Convert the position from "px" to Int
            const y = -parseInt(document.body.style.top, 10);
            const x = -parseInt(document.body.style.left, 10);

            // Restore styles
            const $html = document.documentElement;
            const $body = document.body;

            $html.style.height = htmlStyle?.height ?? '';

            $html.style.overflow = htmlStyle?.overflow ?? '';

            $body.style.position = bodyStyle.position || '';

            $body.style.top = bodyStyle.top || '';

            $body.style.left = bodyStyle.left || '';

            $body.style.width = bodyStyle.width || '';

            $body.style.height = bodyStyle.height || '';

            $body.style.overflow = bodyStyle.overflow || '';

            // Restore scroll
            window.scrollTo(x, y);

            bodyStyle = undefined;
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    const isTargetElementTotallyScrolled = (targetElement: HTMLElement | undefined): boolean => {
        if(targetElement) {
            return targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight;
        }

        return false;
    };

    const handleScroll = (
        event: THandleScrollEvent,
        targetElement: HTMLElement
    ): boolean => {
        const clientY = event.targetTouches[0].clientY - initialClientY;

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if(allowTouchMove(event.target!)) {
            return false;
        }

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if(targetElement && targetElement.scrollTop === 0 && clientY > 0) {
            // element is at the top of its scroll.
            return preventDefault(event);
        }

        if(isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
            // element is at the bottom of its scroll.
            return preventDefault(event);
        }

        event.stopPropagation();

        return true;
    };

    /**
     *
     * @param targetElement HTMLElement
     * @param options BodyScrollOptions
     * @returns void
     */
    const disableBodyScroll = (
        targetElement: HTMLElement,
        options?: IBodyScrollOptions
    ): void => {
        // targetElement must be provided
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if(!targetElement) {
            console.error(
                'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
            );

            return;
        }

        locksIndex.set(
            targetElement,
            locksIndex.get(targetElement) ? locksIndex.get(targetElement)! + 1 : 1
        );

        // disableBodyScroll must not have been called on this targetElement before
        if(locks.some((lock) => lock.targetElement === targetElement)) {
            return;
        }

        const lock = {
            targetElement,
            options: options ?? {}
        };

        locks = [...locks, lock];

        if(isIosDevice) {
            setPositionFixed();
        } else {
            setOverflowHidden(options);
        }

        if(isIosDevice) {
            // eslint-disable-next-line no-param-reassign
            targetElement.ontouchstart = (event: THandleScrollEvent) => {
                if(event.targetTouches.length === 1) {
                    // detect single touch.
                    initialClientY = event.targetTouches[0].clientY;
                }
            };

            // eslint-disable-next-line no-param-reassign
            targetElement.ontouchmove = (event: THandleScrollEvent) => {
                if(event.targetTouches.length === 1) {
                    // detect single touch.
                    handleScroll(event, targetElement);
                }
            };

            if(!documentListenerAdded) {
                document.addEventListener(
                    'touchmove',
                    preventDefault,
                    hasPassiveEvents ? { passive: false } : undefined
                );

                documentListenerAdded = true;
            }
        }
    };

    const clearAllBodyScrollLocks = (): void => {
        if(isIosDevice) {
            // Clear all locks ontouchstart/ontouchmove handlers, and the references.
            locks.forEach((lock: ILock) => {
                // eslint-disable-next-line no-param-reassign
                lock.targetElement.ontouchstart = null;

                // eslint-disable-next-line no-param-reassign
                lock.targetElement.ontouchmove = null;
            });

            if(documentListenerAdded) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (document as any).removeEventListener(
                    'touchmove',
                    preventDefault,
                    hasPassiveEvents ? { passive: false } : undefined
                );

                documentListenerAdded = false;
            }

            // Reset initial clientY.
            initialClientY = -1;
        }

        if(isIosDevice) {
            restorePositionSetting();
        } else {
            restoreOverflowSetting();
        }

        locks = [];

        locksIndex.clear();
    };

    /**
     * @param targetElement
     * @returns void
     */
    const enableBodyScroll = (targetElement: HTMLElement): void => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if(!targetElement) {
            console.error(
                'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
            );

            return;
        }

        locksIndex.set(
            targetElement,
            locksIndex.get(targetElement)                ? locksIndex.get(targetElement)! - 1                : 0
        );

        if(locksIndex.get(targetElement) === 0) {
            locks = locks.filter((lock) => lock.targetElement !== targetElement);

            locksIndex.delete(targetElement);
        }

        if(isIosDevice) {
            // eslint-disable-next-line no-param-reassign
            targetElement.ontouchstart = null;

            // eslint-disable-next-line no-param-reassign
            targetElement.ontouchmove = null;

            if(documentListenerAdded && locks.length === 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (document as any).removeEventListener(
                    'touchmove',
                    preventDefault,
                    hasPassiveEvents ? { passive: false } : undefined
                );

                documentListenerAdded = false;
            }
        }

        if(locks.length === 0) {
            if(isIosDevice) {
                restorePositionSetting();
            } else {
                restoreOverflowSetting();
            }
        }
    };

    return {
        enableBodyScroll,
        disableBodyScroll,
        clearAllBodyScrollLocks
    };
}
