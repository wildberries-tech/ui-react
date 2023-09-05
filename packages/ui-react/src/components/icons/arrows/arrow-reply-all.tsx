import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowReplyAll = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m8.293 17.707 1.414-1.414L4.414 11l5.293-5.293-1.414-1.414L1.586 11l6.707 6.707Zm6.414-1.414L10.414 12H11c6.747 0 9 2.344 9 9h2c0-7.744-3.131-11-11-11h-.586l4.293-4.293-1.414-1.414L6.586 11l6.707 6.707 1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowReplyAll;
