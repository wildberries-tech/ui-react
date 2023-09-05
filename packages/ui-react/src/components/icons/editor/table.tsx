import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorTable = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M9 4h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6ZM7 6H3v3h4V6Zm2 3V6h12v3H9Zm-2 2H3v3h4v-3Zm2 3v-3h12v3H9Zm-2 2H3v3h4v-3Zm2 3v-3h12v3H9Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorTable;
