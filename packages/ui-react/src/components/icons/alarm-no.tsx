import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconAlarmNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.336 3.75 1.293 4.793l1.414 1.414L3.75 5.164l.507.507A9.959 9.959 0 0 0 2 12.001c0 5.522 4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.258l2.964 2.964 1.414-1.414-20-20-1.414 1.414L2.336 3.75Zm14.57 14.57L5.68 7.094A8 8 0 0 0 16.905 18.32ZM20 12a7.973 7.973 0 0 1-.642 3.144l1.5 1.5A9.956 9.956 0 0 0 22 12c0-5.523-4.477-10-10-10a9.957 9.957 0 0 0-4.644 1.142l1.5 1.5A8 8 0 0 1 20 12Zm-.793-10.707 3.5 3.5-1.414 1.414-3.5-3.5 1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAlarmNo;
