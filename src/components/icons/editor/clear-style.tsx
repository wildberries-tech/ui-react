import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorClearStyle = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM4 20V4h16v16H4Zm10.8-5H9.2L8 18H6l5-12h2l5 12h-2l-1.2-3ZM12 8l2 5h-4l2-5Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorClearStyle;
