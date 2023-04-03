import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMoreVertical = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMoreVertical;
