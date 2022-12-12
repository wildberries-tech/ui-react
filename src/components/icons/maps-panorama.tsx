import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsPanorama = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M4 9.528c.809.42 1.83.757 3 1.002v7.938C5.17 18.049 4 17.462 4 17V9.528Zm5 9.288v2.027c-4.056-.445-7-1.81-7-3.843V7c0-2.507 4.48-4 10-4s10 1.493 10 4v10c0 2.032-2.944 3.398-7 3.843V15.184a24.332 24.332 0 0 0-6 0v3.632ZM20 17c0 .462-1.17 1.05-3 1.468V10.53c1.17-.245 2.191-.582 3-1.002V17Zm-5-3.843V8.816C17.933 8.45 20 7.613 20 7c0-.807-3.58-2-8-2S4 6.193 4 7c0 .613 2.067 1.45 5 1.816v4.341A27.659 27.659 0 0 1 12 13c1.045 0 2.053.053 3 .157Z" clipRule="evenodd" />
    </SVG>
);

export default IconMapsPanorama;
