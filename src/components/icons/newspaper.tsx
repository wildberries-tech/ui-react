import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconNewspaper = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M4 18V5h12v13c0 .35.06.687.17 1H5a1 1 0 0 1-1-1Zm15 3H5a3 3 0 0 1-3-3V3h16v5h4v10a3 3 0 0 1-3 3Zm-1-11h2v8a1 1 0 1 1-2 0v-8Zm-8-3v4H6V7h4Zm4 3V8h-3v2h3Zm0 2v2H6v-2h8Zm0 5v-2H6v2h8Z" clipRule="evenodd" />
    </SVG>
);

export default IconNewspaper;
