import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionWiFiNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.707 1.293 1.293 2.707l3.99 3.991A14.004 14.004 0 0 0 2 9.176l1.414 1.414.075-.075a11.982 11.982 0 0 1 3.28-2.331L8.246 9.66a9.965 9.965 0 0 0-3.492 2.269l1.414 1.414a7.963 7.963 0 0 1 3.669-2.093l1.754 1.755a5.979 5.979 0 0 0-4.009 1.752l1.415 1.415a4 4 0 0 1 5.656 0l.053-.053 6.588 6.588 1.414-1.414-20-20Zm10.62 7.82 4.192 4.192 1.376-1.376a9.955 9.955 0 0 0-5.568-2.816ZM9.444 5.229l1.793 1.794c3.279-.201 6.625.938 9.147 3.417l1.414-1.414A13.985 13.985 0 0 0 9.444 5.229Zm3.794 12.357a2 2 0 0 0-2.828 0L11.824 19l1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionWiFiNo;
