import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBoldForwardAll = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M10 3.586 18.414 12 10 20.414v-4.58c-2.044-.225-4.124.704-6.293 2.873L2 20.414V18c0-6.15 2.739-9.587 8-9.965v-4.45Zm2 4.828V10h-1c-4.022 0-6.25 1.81-6.84 5.682 2.314-1.68 4.687-2.251 7.082-1.652l.758.19v1.366L15.586 12 12 8.414Zm2-4.828v3L19.414 12 14 17.414v3L22.414 12 14 3.586Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowBoldForwardAll;
