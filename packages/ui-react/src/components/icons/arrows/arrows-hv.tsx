import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowsHv = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M19.586 13H13v6.586l2.293-2.293 1.414 1.414L12 23.414l-4.707-4.707 1.414-1.414L11 19.586V13H4.414l2.293 2.293-1.414 1.414L.586 12l4.707-4.707 1.414 1.414L4.414 11H11V4.414L8.707 6.707 7.293 5.293 12 .586l4.707 4.707-1.414 1.414L13 4.414V11h6.586l-2.293-2.293 1.414-1.414L23.414 12l-4.707 4.707-1.414-1.414L19.586 13Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowsHv;
