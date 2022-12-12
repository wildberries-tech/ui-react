import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconXOctagon = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M16.556 1 23 7.444v9.112L16.556 23H7.444L1 16.556V7.444L7.444 1h9.112Zm-.828 2H8.272L3 8.272v7.456L8.272 21h7.456L21 15.728V8.272L15.728 3Zm-7.02 13.707L12 13.414l3.293 3.293 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L12 10.586 8.707 7.293 7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconXOctagon;
