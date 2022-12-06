import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconPlus = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2v9Z" clipRule="evenodd" />
    </SVG>
);

export default IconPlus;
