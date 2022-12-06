import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconSearch = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M10 18a8 8 0 1 1 6.32-3.094l5.387 5.387-1.414 1.414-5.387-5.387A7.965 7.965 0 0 1 10 18Zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconSearch;
