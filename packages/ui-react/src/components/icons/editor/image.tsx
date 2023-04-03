import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorImage = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v11.586l4-4 3.5 3.5 6.5-6.5 2 2V4H4Zm0 16v-1.586l4-4L13.586 20H4Zm16 0h-3.586l-3.5-3.5L18 11.414l2 2V20ZM14 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorImage;
