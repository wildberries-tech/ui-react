import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBoldReplyAll = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M4.586 12 10 6.586v-3L1.586 12 10 20.414v-3L4.586 12ZM14 15.834v4.58L5.586 12 14 3.586v4.449c5.261.378 8 3.816 8 9.965v2.414l-1.707-1.707c-2.17-2.17-4.248-3.098-6.293-2.873Zm-2-7.42L8.414 12 12 15.586v-1.367l.758-.19c2.395-.598 4.768-.027 7.082 1.653C19.25 11.81 17.022 10 13 10h-1V8.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldReplyAll;
