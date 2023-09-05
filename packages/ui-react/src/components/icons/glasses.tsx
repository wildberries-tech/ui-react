import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconGlasses = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 13a1 1 0 1 1 0-2h.416a5.001 5.001 0 0 1 8.878-.563A3.469 3.469 0 0 1 12 10c.623 0 1.216.158 1.706.437a5.001 5.001 0 0 1 8.878.563H23a1 1 0 1 1 0 2 5 5 0 1 1-9.975-.5H13c0-.203-.395-.5-1-.5s-1 .297-1 .5h-.025A5 5 0 1 1 1 13Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm15-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconGlasses;
