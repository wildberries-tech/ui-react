import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleArrowTopRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3.293-4.293L14 11.414V15h2V8H9v2h3.586l-5.293 5.293 1.414 1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleArrowTopRight;
