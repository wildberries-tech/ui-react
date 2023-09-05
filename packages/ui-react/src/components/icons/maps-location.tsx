import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsLocation = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 13h2.055A9.004 9.004 0 0 0 11 20.945V23h2v-2.055A9.004 9.004 0 0 0 20.945 13H23v-2h-2.055A9.004 9.004 0 0 0 13 3.055V1h-2v2.055A9.004 9.004 0 0 0 3.055 11H1v2Zm4-1a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsLocation;
