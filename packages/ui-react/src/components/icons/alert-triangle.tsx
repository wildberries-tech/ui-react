import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlertTriangle = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22.441 15.953 15.436 3.978a3.974 3.974 0 0 0-6.873 0l-7.008 11.98a4.007 4.007 0 0 0 3.419 6.04h14.038a4.005 4.005 0 0 0 3.43-6.045Zm-19.163 1.02 7.013-11.988a1.975 1.975 0 0 1 3.416-.003l7.01 11.985a2.007 2.007 0 0 1-1.715 3.031H4.982a2.004 2.004 0 0 1-1.704-3.024ZM12 17.999a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.004-10h-2.001v7h2v-7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAlertTriangle;
