import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconLockCircle = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1 11c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 0 12 0 1 4.925 1 11Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM11 7v2h2V7a1 1 0 1 0-2 0Zm4 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2V7a3 3 0 1 1 6 0v2Zm-6 2v4h6v-4H9Zm2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconLockCircle;
