import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorBrushM = (props: IProps) => (
    <SVG {...props.svg}>
        <circle
            cx="12"
            cy="12"
            r="4"
        />
    </SVG>
);

export default IconEditorBrushM;
