import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBook = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M21 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h15v16a1 1 0 1 0 0 2v2Zm-3-3c0-.35.06-.687.17-1H6a1 1 0 1 0 0 2h12.17c-.11-.313-.17-.65-.17-1ZM6 4h13v12H6c-.35 0-.687.06-1 .17V5a1 1 0 0 1 1-1Z" clipRule="evenodd" />
    </SVG>
);

export default IconBook;
