export const debounce = function<T extends (...params: Array<never>) => unknown> (callback: T, delay = 300) {
    let timer: NodeJS.Timeout | null = null;

    return function (...args: Parameters<T>) {
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
