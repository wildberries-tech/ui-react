import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorTextBold = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16.43 11.348A5.502 5.502 0 0 1 14.5 22H6V2h6.5a5.5 5.5 0 0 1 3.93 9.348ZM12.5 11a3.5 3.5 0 1 0 0-7H8v7h4.5ZM8 20v-7h6.5a3.5 3.5 0 1 1 0 7H8Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorTextBold;
