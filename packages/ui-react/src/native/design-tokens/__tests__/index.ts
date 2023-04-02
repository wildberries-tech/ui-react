import { useDesignTokensNative } from '..';

test('Correct element', () => {
    expect(document.body.classList.length).toBe(0);

    useDesignTokensNative(document.body);

    expect(document.body.classList.length).toBe(1);
});

test('Incorrect element', () => {
    useDesignTokensNative(null);
});
