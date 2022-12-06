import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCheckMarks = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m14.62 6-8.074 8.2-3.192-3.25-1.38 1.4L6.546 17 16 7.4 14.62 6Zm-3.954 9.094L12.546 17 22 7.4 20.62 6l-8.074 8.2-.5-.507-1.38 1.401Z" clipRule="evenodd" />
    </SVG>
);

export default IconCheckMarks;
