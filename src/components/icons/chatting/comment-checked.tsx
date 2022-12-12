import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconChattingCommentChecked = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12.087 18 6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913ZM8 18.196 11.513 16H20V4H4v12h4v2.196Zm7.293-11.903L11 10.586 8.707 8.293 7.293 9.707 11 13.414l5.707-5.707-1.414-1.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconChattingCommentChecked;
