import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconAlertTriangleSharp = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            d="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"
        />
    </SVG>
);

export default IconAlertTriangleSharp;
