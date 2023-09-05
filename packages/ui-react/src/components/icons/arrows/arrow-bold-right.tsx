import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBoldRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m2 13.82 10 2v5.384L22.519 12 12 2.796V8.18l-10 2v3.64Zm12-6.616L19.481 12 14 16.796V14.18l-10-2v-.36l10-2V7.204Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldRight;
