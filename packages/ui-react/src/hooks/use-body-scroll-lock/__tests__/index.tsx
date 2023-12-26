import { renderHook } from '@testing-library/react';

import { useBodyScrollLock } from '..';

test('Return attributes', () => {
    const { result } = renderHook(() => useBodyScrollLock());

    expect(result.current).toHaveProperty('enableBodyScroll');

    expect(result.current).toHaveProperty('disableBodyScroll');

    expect(result.current).toHaveProperty('clearAllBodyScrollLocks');
});

describe('body scroll', () => {
    let body: HTMLElement | null;
    let ref: {
        current: HTMLDivElement
    };

    beforeEach(() => {
        body = document.createElement('body');

        document.body = body;

        ref = {
            current: document.createElement('div')
        };
    });

    afterEach(() => {
        body = null;
    });

    test('disable/enable body scroll', () => {
        const { result } = renderHook(() => useBodyScrollLock());

        result.current.disableBodyScroll(ref.current);

        ref.current.dispatchEvent(new WheelEvent('wheel', { deltaY: 100 }));

        expect(body?.style.overflow).toBe('hidden');

        result.current.enableBodyScroll(ref.current);

        expect(body?.style.overflow).toBe('');
    });

    test('disable scroll and clear all scroll', () => {
        const { result } = renderHook(() => useBodyScrollLock());

        result.current.disableBodyScroll(ref.current);

        ref.current.dispatchEvent(new WheelEvent('wheel', { deltaY: 100 }));

        expect(body?.style.overflow).toBe('hidden');

        result.current.clearAllBodyScrollLocks();

        expect(body?.style.overflow).toBe('');
    });
});
