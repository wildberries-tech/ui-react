import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorBrushS = (props: IProps) => (
    <SVG {...props.svg}>
        <circle cx="12" cy="12" r="2" />
    </SVG>
);

export default IconEditorBrushS;
