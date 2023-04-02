import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBoldLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 21.204V15.82l10-2v-3.64l-10-2V2.796L1.481 12 12 21.204Zm-2-4.408L4.519 12 10 7.204V9.82l10 2v.36l-10 2v2.616Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldLeft;
