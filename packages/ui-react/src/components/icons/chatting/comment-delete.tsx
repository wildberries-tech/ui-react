import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconChattingCommentDelete = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12.087 18 6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913ZM8 18.196 11.513 16H20V4H4v12h4v2.196Zm6.293-11.903L12 8.586 9.707 6.293 8.293 7.707 10.586 10l-2.293 2.293 1.414 1.414L12 11.414l2.293 2.293 1.414-1.414L13.414 10l2.293-2.293-1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconChattingCommentDelete;
