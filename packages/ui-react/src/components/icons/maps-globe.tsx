import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsGlobe = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm1 16.95V21h2v2H9v-2h2v-1.05a9.965 9.965 0 0 1-6.027-2.835l1.405-1.423A8 8 0 0 0 20 10c0-2.1-.812-4.07-2.24-5.552L19.2 3.06A9.968 9.968 0 0 1 22 10c0 5.185-3.947 9.449-9 9.95ZM7 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsGlobe;
