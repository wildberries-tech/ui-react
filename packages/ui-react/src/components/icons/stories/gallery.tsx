import React, { useState, FC } from 'react';
import { IconGallery, IconItem, Heading, Markdown, Source } from '@storybook/blocks';

import { useClassnames } from '../../../hooks/use-classnames';
import { DesignTokens } from '../../design-tokens';
import { InputText } from '../../input-text';
import { IconSearch } from '../search';
import { IProps } from '..';

import style from './gallery.module.pcss';

const modules: Record<string, FC<{ svg: IProps }>> = import.meta.glob([
    './../**/*.tsx',
    '!**/index.tsx',
    '!**/__tests__',
    '!**/stories'
], {
    import: 'default',
    eager: true
});

const modulesKeys = Object.keys(modules);

export default () => {
    const cn = useClassnames(style);
    const [icon, setIcon] = useState(modules[modulesKeys[0]].displayName ?? '???');
    const [filter, setFilter] = useState('');

    return (
        <DesignTokens>
            <Heading>Использование</Heading>
            <Markdown>Импорт компонента в код.</Markdown>
            <div className={cn('gallery__code')}>
                <Source
                    code={`import { ${icon} } from '@wb-tech/ui-react';`}
                />
            </div>
            <Heading>Iconography</Heading>
            <InputText
                name="filter"
                className={cn('gallery__input')}
                elBefore={<IconSearch />}
                onChange={(e) => {
                    setFilter(e.target.value.toLowerCase());
                }}
            />
            <IconGallery>
                {modulesKeys.map((key, index) => {
                    const IconComponent = modules[key];

                    if(filter && !IconComponent.displayName?.toLowerCase().includes(filter)) {
                        return null;
                    }

                    return (
                        <IconItem
                            key={index}
                            name={IconComponent.displayName ?? '???'}
                        >
                            <IconComponent
                                svg={{
                                    className: cn('gallery__icon', {
                                        'gallery__icon_selected': IconComponent.displayName === icon
                                    }),
                                    onClick: () => {
                                        setIcon(IconComponent.displayName ?? '???');
                                    }
                                }}
                            />
                        </IconItem>
                    );
                })}
            </IconGallery>
        </DesignTokens>
    );
};
