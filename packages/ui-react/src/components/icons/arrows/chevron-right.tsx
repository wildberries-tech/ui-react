import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsChevronRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M14.586 12 7.293 4.707l1.414-1.414L17.414 12l-8.707 8.707-1.414-1.414L14.586 12Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsChevronRight;
