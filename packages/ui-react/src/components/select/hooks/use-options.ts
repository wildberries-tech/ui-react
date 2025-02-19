import { useCallback } from 'react';
import { GroupBase } from 'react-select';

import { IOption, TOptionOrSingleValueProps, TArrayOptions } from '../types';

interface IProps {
    readonly isOptionsForFetch?: boolean,
    readonly fetchOptions?: (search?: string) => Promise<TArrayOptions>
}

export const useOption = ({ isOptionsForFetch = false, fetchOptions }: IProps) => {
    const getOptionBefore = useCallback(<IsMulti extends boolean = false>(option: TOptionOrSingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => {
        if(option.data.elBefore) {
            if(typeof option.data.elBefore === 'function') {
                return option.data.elBefore(option);
            }
        
            return option.data.elBefore;
        }
    }, []);
        
    const getOptionAfter = useCallback(<IsMulti extends boolean = false>(option: TOptionOrSingleValueProps<IOption, IsMulti, GroupBase<IOption>>) => {
        if(option.data.elAfter) {
            if(typeof option.data.elAfter === 'function') {
                return option.data.elAfter(option);
            }
        
            return option.data.elAfter;
        }
    }, []);

    const getLoadOptions = useCallback(async (
        search: string
    ): Promise<{ options: Array<IOption | GroupBase<IOption>>, hasMore: boolean }> => {
        let options: Array<IOption | GroupBase<IOption>> = [];
    
        if(fetchOptions) {
            options = await fetchOptions(search);
        }
    
        return {
            // новые опции для списка
            options,
            // есть ли еще данные для загрузки
            hasMore: isOptionsForFetch
        };
    }, [isOptionsForFetch, fetchOptions]);

    return {
        getOptionBefore,
        getOptionAfter,
        getLoadOptions 
    };
};