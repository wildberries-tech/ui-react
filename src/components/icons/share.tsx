import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconShare = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M14 6c0 .287.03.568.088.838L9.017 9.373a4 4 0 1 0 0 5.253l5.07 2.536a4 4 0 1 0 .895-1.788l-5.07-2.536a4.016 4.016 0 0 0 0-1.676l5.071-2.536A4 4 0 1 0 14 6Zm-6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconShare;
