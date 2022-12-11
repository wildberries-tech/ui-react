import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBoldReply = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1.481 12 12 21.204v-5.332c3.31-.353 6.046.588 8.293 2.835L22 20.414V18c0-6.266-3.451-9.669-10-9.977V2.796L1.481 12Zm3.038 0L10 7.204V10h1c5.2 0 8.05 1.85 8.799 5.716-2.543-1.702-5.549-2.272-8.963-1.702l-.836.139v2.643L4.519 12Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowBoldReply;
