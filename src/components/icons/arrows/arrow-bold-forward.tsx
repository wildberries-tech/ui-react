import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBoldForward = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12 2.796v5.227C5.451 8.33 2 11.734 2 18v2.414l1.707-1.707C5.954 16.46 8.69 15.519 12 15.872v5.332L22.519 12 12 2.796ZM14 10V7.204L19.481 12 14 16.796v-2.643l-.836-.14c-3.414-.569-6.42.001-8.963 1.703C4.95 11.851 7.8 10 13 10h1Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowBoldForward;
