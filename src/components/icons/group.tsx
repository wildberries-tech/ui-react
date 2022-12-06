import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconGroup = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M16 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 8.654 3.413 8.095 8.095 0 0 1 4.172 3.12 1 1 0 0 1-1.652 1.126C21.198 15.227 19.418 14 17 14c-3.834 0-6 3.074-6 5a1 1 0 0 1-2 0c0-.692.158-1.43.46-2.157a1.005 1.005 0 0 1-.21-.183C8.427 15.726 7.153 15 5.5 15s-2.928.726-3.749 1.66a1 1 0 0 1-1.5-1.32 6.871 6.871 0 0 1 2.107-1.62 4.5 4.5 0 1 1 6.286 0 6.87 6.87 0 0 1 1.865 1.358 8.097 8.097 0 0 1 2.484-2.083A4.992 4.992 0 0 1 11 9Zm-8 1.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconGroup;
