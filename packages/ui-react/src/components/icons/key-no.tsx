import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconKeyNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m1.293 2.707 6.72 6.72c.02.342.066.68.135 1.01L2 16.587V22h7v-2h2v-2h2v-2h1.586l6.707 6.707 1.414-1.414-20-20-1.414 1.414ZM10 11.414 12.586 14H11v2H9v2H7v2H4v-2.586l6-6Zm-.762-6.39a7 7 0 1 1 9.738 9.738l-1.447-1.447a5 5 0 1 0-6.843-6.843L9.238 5.023ZM15 7a2 2 0 0 0-1.99 1.796l2.194 2.194A2 2 0 0 0 15 7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconKeyNo;
