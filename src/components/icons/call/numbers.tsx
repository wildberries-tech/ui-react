import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCallNumbers = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M2 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconCallNumbers;
