import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCircleBlock = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm7.032-5.382a9 9 0 0 0-12.65-12.65l12.65 12.65Zm-1.414 1.414a9 9 0 0 1-12.65-12.65l12.65 12.65Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCircleBlock;
