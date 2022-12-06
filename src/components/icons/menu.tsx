import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMenu = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M22 7V5H2v2h20Zm0 4v2H2v-2h20Zm0 6v2H2v-2h20Z" clipRule="evenodd" />
    </SVG>
);

export default IconMenu;
