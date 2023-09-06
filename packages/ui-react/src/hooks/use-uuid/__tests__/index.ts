import { expect, jest, test } from '@jest/globals';
import { renderHook } from '@testing-library/react';

import { useUUID } from '..';

const UUID_VALUE = 'uuid-v4-mock-value';

jest.mock('uuid', () => ({
    v4: () => UUID_VALUE
}));

test('Call without arguments', () => {
    const { result } = renderHook(() => useUUID());

    expect(result.current).toBe(UUID_VALUE);
});
