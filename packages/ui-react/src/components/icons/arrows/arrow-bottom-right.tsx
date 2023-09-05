import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBottomRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M19 17.586V10h2v11H10v-2h7.586L4.293 5.707l1.414-1.414L19 17.586Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBottomRight;
