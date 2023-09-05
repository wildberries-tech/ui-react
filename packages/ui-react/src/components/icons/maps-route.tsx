import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsRoute = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6 22a3.001 3.001 0 0 0 2.83-2h8.67a4.5 4.5 0 1 0 0-9h-11a2.5 2.5 0 0 1 0-5h3.086L8.293 7.293l1.414 1.414L13.414 5 9.707 1.293 8.293 2.707 9.586 4H6.5a4.5 4.5 0 1 0 0 9h11a2.5 2.5 0 0 1 0 5H8.83A3.001 3.001 0 1 0 6 22Zm-1-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM18 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsRoute;
