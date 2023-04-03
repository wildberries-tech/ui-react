import { renderHook } from '@testing-library/react';

import { useDesignTokens } from '..';

test('Return attributes', () => {
    const { result } = renderHook(() => useDesignTokens());

    expect(result.current).toStrictEqual({ className: 'design-tokens' });
});
