import { useDesignTokensNative } from '../';

it('Correct element', () => {
    expect(document.body.classList.length).toBe(0);
    useDesignTokensNative(document.body);
    expect(document.body.classList.length).toBe(1);
});

it('Incorrect element', () => {
    useDesignTokensNative(null);
});
