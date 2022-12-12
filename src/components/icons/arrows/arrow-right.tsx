import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M17.586 13H3v-2h14.586l-6.293-6.293 1.414-1.414L21.414 12l-8.707 8.707-1.414-1.414L17.586 13Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowRight;
