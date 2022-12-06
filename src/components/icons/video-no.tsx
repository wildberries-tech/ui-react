import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconVideoNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1.707.293.293 1.707 3.586 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12c.702 0 1.32-.362 1.677-.91l5.616 5.617 1.414-1.414-22-22ZM15 16.414 5.586 7H3v10h12v-.586Zm2-8.032 6-3V18.37l-2-2V8.618l-4 2v2.383l-2-2V7h-4L9 5h6a2 2 0 0 1 2 2v1.381Z" clipRule="evenodd" />
    </SVG>
);

export default IconVideoNo;
