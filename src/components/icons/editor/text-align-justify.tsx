import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextAlignJustify = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M22 7V5H2v2h20Zm0 2v2H2V9h20Zm0 6v-2H2v2h20Zm0 4v-2H2v2h20Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorTextAlignJustify;
