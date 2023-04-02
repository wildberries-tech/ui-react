import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsPinNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 1a9.13 9.13 0 0 0-5.194 1.592l1.445 1.445A7.156 7.156 0 0 1 12.001 3c3.835 0 7 2.897 7 7 0 1.123-.36 2.36-1.08 3.706l1.468 1.469C20.46 13.345 21 11.623 21 10c0-5.25-4.097-9-9-9ZM4.126 5.54 1.293 2.707l1.414-1.414 20 20-1.414 1.414-4.275-4.275c-1.19 1.383-2.644 2.823-4.36 4.321l-.658.575-.658-.575C5.812 17.923 3 13.707 3 10c0-1.66.41-3.17 1.126-4.46Zm11.473 11.473L5.617 7.031A7.232 7.232 0 0 0 5 10c0 2.85 2.307 6.433 7 10.663 1.416-1.276 2.615-2.494 3.599-3.65Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsPinNo;
