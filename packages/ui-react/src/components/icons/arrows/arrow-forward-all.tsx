import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowForwardAll = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M9.293 5.707 13.586 10H13C5.131 10 2 13.256 2 21h2c0-6.656 2.254-9 9-9h.586l-4.293 4.293 1.414 1.414L17.414 11l-6.707-6.707-1.414 1.414Zm5 0L19.586 11l-5.293 5.293 1.414 1.414L22.414 11l-6.707-6.707-1.414 1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowForwardAll;
