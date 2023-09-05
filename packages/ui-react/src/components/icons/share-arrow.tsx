import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconShareArrow = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13 16V5.414l3.293 3.293 1.414-1.414L12 1.586 6.293 7.293l1.414 1.414L11 5.414V16h2Zm8 4v-9h-2v9H5v-9H3v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconShareArrow;
