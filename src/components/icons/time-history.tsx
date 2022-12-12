import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconTimeHistory = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M8 6H5.114C7.044 3.791 9.16 3 12 3a9 9 0 1 1-9 9H1c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1c-3.213 0-5.763.91-8 3.256V1.991H2V8h6V6Zm9 5h-4V6h-2v7h6v-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconTimeHistory;
