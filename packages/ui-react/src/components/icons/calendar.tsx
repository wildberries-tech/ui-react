import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCalendar = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6 6h2V5h8v1h2V5h2v3H4V5h2v1Zm-2 4v10h16V10H4Zm4-7h8V2h2v1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2V2h2v1Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCalendar;
