import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconTrash = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M9 1h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.08L19 21a2 2 0 0 1-2 2H7c-1.105 0-2-.895-1.997-1.917L4.08 10H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V3a2 2 0 0 1 2-2ZM4 6h16v2H4V6Zm2.086 4h11.827l-.91 10.917L17 21H7l-.914-11ZM15 3v1H9V3h6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconTrash;
