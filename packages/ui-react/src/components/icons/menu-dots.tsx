import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMenuDots = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M18 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2-10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM2 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMenuDots;
