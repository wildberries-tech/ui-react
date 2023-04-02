import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconChattingCommentText = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6 21.804 12.087 18H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v3.804ZM11.513 16 8 18.196V16H4V4h16v12h-8.487ZM7 13v-2h7v2H7Zm0-6v2h9V7H7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconChattingCommentText;
