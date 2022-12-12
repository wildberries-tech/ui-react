import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconChattingCommentPlus = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12.087 18 6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913ZM8 18.196 11.513 16H20V4H4v12h4v2.196ZM11 6v3H8v2h3v3h2v-3h3V9h-3V6h-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconChattingCommentPlus;
