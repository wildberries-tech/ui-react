import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextUnderline = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M19 2h-2v9c0 3.314-1.686 5-5 5s-5-1.686-5-5V2H5v9c0 4.418 2.582 7 7 7s7-2.582 7-7V2ZM4 20v2h16v-2H4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorTextUnderline;
