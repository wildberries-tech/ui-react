import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconChattingCommentMinus = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12.087 18 6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913ZM8 18.196 11.513 16H20V4H4v12h4v2.196ZM8 9v2h8V9H8Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconChattingCommentMinus;
