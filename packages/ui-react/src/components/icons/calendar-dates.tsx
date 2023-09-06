import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCalendarDates = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 6H6V5H4v3h16V5h-2v1h-2V5H8v1Zm12 4H4v10h16V10Zm-4-7H8V2H6v1H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2V2h-2v1ZM7 14v-2h2v2H7Zm4 0h2v-2h-2v2Zm4 0v-2h2v2h-2Zm-8 2v2h2v-2H7Zm6 2h-2v-2h2v2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCalendarDates;
