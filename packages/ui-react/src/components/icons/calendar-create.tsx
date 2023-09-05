import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCalendarCreate = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6 6h2V5h8v1h2V5h2v3H4V5h2v1Zm-2 4v10h10v2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2V2h2v1h8V2h2v1h2a2 2 0 0 1 2 2v9h-2v-4H4Zm17 9v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCalendarCreate;
