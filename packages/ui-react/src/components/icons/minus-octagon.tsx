import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMinusOctagon = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M23 7.444v9.112L16.556 23H7.444L1 16.556V7.444L7.444 1h9.112L23 7.444ZM15.728 3H8.272L3 8.272v7.456L8.272 21h7.456L21 15.728V8.272L15.728 3ZM17 11H7v2h10v-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMinusOctagon;
