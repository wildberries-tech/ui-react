import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorText = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M20 4H4v2h7v14h2V6h7V4Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorText;
