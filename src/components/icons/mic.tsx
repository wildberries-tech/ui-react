import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMic = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4Zm1 18.938V21h3v2H8v-2h3v-1.062A8.001 8.001 0 0 1 4 12v-2h2v2a6 6 0 0 0 12 0v-2h2v2a8.001 8.001 0 0 1-7 7.938ZM10 5a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0V5Z" clipRule="evenodd" />
    </SVG>
);

export default IconMic;
