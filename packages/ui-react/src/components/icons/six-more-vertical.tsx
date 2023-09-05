import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconSixMoreVertical = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM6 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconSixMoreVertical;
