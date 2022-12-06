import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconDashboard = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M5.398 21.8A10.983 10.983 0 0 1 1 13C1 6.925 5.925 2 12 2s11 4.925 11 11c0 3.504-1.65 6.735-4.398 8.8l-.267.2H5.665l-.267-.2Zm12.26-1.8a9 9 0 1 0-11.315 0h11.314Zm-.339-12.427-1.638-1.146-2.633 3.761a3 3 0 1 0 1.538 1.29l2.733-3.905ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconDashboard;
