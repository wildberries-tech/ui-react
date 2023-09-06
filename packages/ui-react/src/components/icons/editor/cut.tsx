import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorCut = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m17.806 1.441 1.66 1.117-6.26 9.299 2.35 3.49a4 4 0 1 1-1.625 1.167l-1.931-2.867-1.93 2.867a4 4 0 1 1-1.625-1.167l2.35-3.49-6.26-9.299 1.659-1.117L12 10.066l5.806-8.625ZM9 19.078a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorCut;
