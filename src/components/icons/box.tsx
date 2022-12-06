import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBox = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M20 19V9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM6 19V9h12v10H6Zm3-7v-2h6v2H9ZM4 7V5h16v2H4Z" clipRule="evenodd" />
    </SVG>
);

export default IconBox;
