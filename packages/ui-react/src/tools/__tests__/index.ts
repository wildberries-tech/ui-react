import { debounce } from '../debounce';
import { consoleFormat } from '../console-format';

jest.useFakeTimers();

test('Single execute', () => {
    const func = jest.fn();
    const debounced = debounce(func, 300);

    debounced();

    jest.advanceTimersByTime(150);

    debounced();

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
});

test('Console format', () => {
    consoleFormat('Text');
});
