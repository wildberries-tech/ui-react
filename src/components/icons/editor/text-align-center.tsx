import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextAlignCenter = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M22 7V5H2v2h20Zm-3 2v2H5V9h14Zm3 6v-2H2v2h20Zm-3 4v-2H5v2h14Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorTextAlignCenter;
