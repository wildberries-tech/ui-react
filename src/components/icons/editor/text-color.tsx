import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorTextColor = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m17 16-1.588-4H8.588L7 16H5l6.003-15H13l6 15h-2Zm3 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1ZM6 21v-1h12v1H6Zm6-17.593L14.618 10H9.382L12 3.407Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorTextColor;
