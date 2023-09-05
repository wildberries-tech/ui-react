import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconBag = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M20.946 2L21.9399 19.8891C22.0011 20.9919 21.1567 21.9357 20.0539 21.9969C20.0262 21.9982 20.0123 21.9988 19.9984 21.9992C19.9846 21.9996 19.9707 21.9997 19.9429 22H4.05713C2.95256 22 2.05713 21.1046 2.05713 20C2.05764 19.9445 2.05764 19.9445 2.06021 19.8891L3.05404 2H20.946ZM4.94602 4L4.05713 20H19.9429L19.054 4H4.94602ZM9.00003 6H7.00003V8.5C7.00003 10.9007 9.32327 13 12 13C14.6768 13 17 10.9007 17 8.5V6H15V8.5C15 9.74837 13.6149 11 12 11C10.3852 11 9.00003 9.74837 9.00003 8.5V6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBag;
