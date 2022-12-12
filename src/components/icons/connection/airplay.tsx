import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionAirplay = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m19.286 19-1.429-2H21V5H3v12h3.143l-1.429 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1.714ZM12 11.28 18.943 21H5.057L12 11.28ZM15.057 19H8.943L12 14.72 15.057 19Z" clipRule="evenodd" />
    </SVG>
);

export default IconConnectionAirplay;
