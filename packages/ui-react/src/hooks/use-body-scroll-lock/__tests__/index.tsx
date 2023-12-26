import { renderHook } from '@testing-library/react';

import { useBodyScrollLock } from '..';

test('Return attributes', () => {
    const { result } = renderHook(() => useBodyScrollLock());

    expect(result.current).toHaveProperty('enableBodyScroll');

    expect(result.current).toHaveProperty('disableBodyScroll');

    expect(result.current).toHaveProperty('clearAllBodyScrollLocks');
});
