import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconShield = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3 15c0 2.66 3 5.327 9 8 6-2.667 9-5.333 9-8l.004-2.205C21.01 9.837 21.02 5.217 21 5c0-.768-.295-.946-1.11-1.44-.247-.15-.541-.328-.89-.56-1.5-1-4.005-2-7-2-3.437 0-6.838 1.892-7 2-.349.232-.643.41-.89.56C3.295 4.054 3 4.232 3 5v10Zm16.002-1.245L19 15c0 1.514-2.228 3.574-7 5.802C7.23 18.569 5 16.509 5 15V5.363l.128-.079c.323-.2.745-.462.981-.62C7.03 4.051 9.84 3 12 3c2.26 0 4.414.68 5.89 1.664a44.4 44.4 0 0 0 1.12.705 1249.318 1249.318 0 0 1-.004 6.432l-.004 1.954Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconShield;
