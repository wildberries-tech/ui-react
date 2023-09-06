import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorList = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm6-1h14v2H8V5Zm14 6H8v2h14v-2ZM8 19h14v-2H8v2Zm-6-1a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorList;
