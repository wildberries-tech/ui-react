import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionBluetoothNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10.586 12 1.293 2.707l1.414-1.414 20 20-1.414 1.414L16 17.414l-5 5v-8l-3.293 3.293-1.414-1.414L10.586 12ZM13 17.586 14.586 16 13 14.414v3.172Zm-2-16v5.2l2 2V6.414L14.586 8 13.4 9.186l1.414 1.414 2.6-2.6L11 1.586Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionBluetoothNo;
