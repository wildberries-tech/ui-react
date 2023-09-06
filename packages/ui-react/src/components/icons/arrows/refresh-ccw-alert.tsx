import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsRefreshCcwAlert = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 7H6.193C7.553 5.079 9.606 4 12 4a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10-2.804 0-5.275 1.183-7 3.27V4H3v5h5V7Zm8 10h1.807c-1.36 1.921-3.413 3-5.807 3a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10 2.804 0 5.275-1.183 7-3.27V20h2v-5h-5v2Zm-4-1.002a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.004-9h-2.001v6h2v-6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsRefreshCcwAlert;
