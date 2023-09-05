import { useMemo } from 'react';
import { v4 } from 'uuid';

export const useUUID = () => {
    return useMemo(v4, []);
};
