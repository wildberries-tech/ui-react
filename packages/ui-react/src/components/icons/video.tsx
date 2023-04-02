import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconVideo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3 5h12a2 2 0 0 1 2 2v1.382l6-3v13.236l-6-3V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm14 8.382 4 2V8.618l-4 2v2.764ZM3 7v10h12V7H3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconVideo;
