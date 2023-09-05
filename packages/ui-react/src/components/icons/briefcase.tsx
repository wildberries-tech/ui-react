import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconBriefcase = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 3h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2ZM4 8h16v5H4V8Zm0 11v-4h7v1h2v-1h7v4H4ZM14 5v1h-4V5h4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBriefcase;
