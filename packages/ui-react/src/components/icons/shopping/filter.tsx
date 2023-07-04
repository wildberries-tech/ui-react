import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconFilter = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2 6.37574L9 14.3757V22.943L15 20.693V14.3757L22 6.37574V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V6.37574ZM20 4V5H4V4H20ZM5.20377 7H18.7962L13.5462 13H10.4538L5.20377 7ZM11 15V20.057L13 19.307V15H11Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconFilter;
