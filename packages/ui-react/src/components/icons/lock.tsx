import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconLock = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M7 7v3H6c-1.068 0-2 .776-2 1.833v8.334C4 21.224 4.932 22 6 22h12c1.068 0 2-.776 2-1.833v-8.334C20 10.776 19.068 10 18 10h-1V7A5 5 0 0 0 7 7Zm8 0v3H9V7a3 3 0 1 1 6 0ZM6 20v-8h12v8H6Zm7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconLock;
