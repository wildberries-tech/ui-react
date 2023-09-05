import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCallVoicemail = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 15h4a5 5 0 1 1 4 2H6a5 5 0 1 1 4-2Zm-4 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm15-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCallVoicemail;
