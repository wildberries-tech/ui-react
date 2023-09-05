import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBoldTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.796 12H8.18l2 10h3.64l2-10h5.384L12 1.481 2.796 12ZM12 4.519 16.796 10H14.18l-2 10h-.36l-2-10H7.204L12 4.519Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldTop;
