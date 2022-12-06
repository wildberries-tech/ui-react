import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBookmarkNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M2.707 1.293 1.293 2.707 5 6.414v16.204l7-3.5 7 3.5v-2.204l2.293 2.293 1.414-1.414-20-20ZM17 18.414l-10-10v10.968l5-2.5 5 2.5v-.968ZM17 4v8.786l2 2V4a2 2 0 0 0-2-2H7c-.235 0-.46.04-.67.115L8.213 4H17Z" clipRule="evenodd" />
    </SVG>
);

export default IconBookmarkNo;
