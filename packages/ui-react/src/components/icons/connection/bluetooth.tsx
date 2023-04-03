import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionBluetooth = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m6.293 7.707 1.414-1.414L11 9.586v-8L17.414 8l-4 4 4 4L11 22.414v-8l-3.293 3.293-1.414-1.414L10.586 12 6.293 7.707ZM13 17.586 14.586 16 13 14.414v3.172ZM14.586 8 13 9.586V6.414L14.586 8Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionBluetooth;
