import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextAlignLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 7V5H2v2h20Zm-6 2v2H2V9h14Zm6 6v-2H2v2h20Zm-6 4v-2H2v2h14Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorTextAlignLeft;
