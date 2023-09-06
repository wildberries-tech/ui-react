import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconSend = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m2.74 2.252 1.365 9.555.772.193-.772.193-1.365 9.555L22.236 12 2.74 2.252Zm3.155 7.94L5.26 5.749 17.764 12 5.26 18.252l.635-4.445L13.123 12l-7.228-1.807Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconSend;
