import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCalendarMinus = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 6H6V5H4v3h16V5h-2v1h-2V5H8v1ZM4 20V10h16v10H4ZM16 3H8V2H6v1H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2V2h-2v1ZM8 14v2h8v-2H8Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCalendarMinus;
