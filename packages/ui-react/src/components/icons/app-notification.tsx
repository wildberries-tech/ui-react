import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAppNotification = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M18 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm1 1h2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2H5v14h14v-7Zm2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAppNotification;
