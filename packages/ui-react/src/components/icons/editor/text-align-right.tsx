import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextAlignRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 7V5H2v2h20Zm0 2v2H8V9h14Zm0 6v-2H2v2h20Zm0 4v-2H8v2h14Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorTextAlignRight;
