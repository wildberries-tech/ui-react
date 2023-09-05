import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorTextItalic = (props: IProps) => (
    <SVG {...props.svg}>
        <path d="m14.802 4-3.555 16H15v2H5.5v-2h3.698l3.555-16H9.5V2H19v2h-4.198Z" />
    </SVG>
);

export default IconEditorTextItalic;
