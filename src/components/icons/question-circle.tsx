import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconQuestionCircle = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 4.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14h2c0-.798.125-.945.947-1.356C15.375 11.93 16 11.202 16 9.5 16 7.32 14.284 6 12 6a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2c1.277 0 2 .556 2 1.5 0 .798-.125.945-.947 1.356C11.625 11.57 11 12.298 11 14Z" clipRule="evenodd" />
    </SVG>
);

export default IconQuestionCircle;
