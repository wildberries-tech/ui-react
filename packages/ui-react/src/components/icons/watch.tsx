import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconWatch = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M15 1H9a1 1 0 0 0-.962.725l-1.185 4.15A7.983 7.983 0 0 0 4 12a7.983 7.983 0 0 0 2.853 6.124l1.185 4.15A1 1 0 0 0 9 23h6a1 1 0 0 0 .961-.725l1.186-4.15A7.987 7.987 0 0 0 19.938 13H21v-2h-1.062a7.987 7.987 0 0 0-2.79-5.124l-1.187-4.15A1 1 0 0 0 15 1Zm-3 3c.933 0 1.828.16 2.66.453L14.247 3H9.754L9.34 4.453A7.987 7.987 0 0 1 12 4ZM9.754 21l-.415-1.453A7.987 7.987 0 0 0 12 20c.933 0 1.828-.16 2.66-.453L14.247 21H9.754ZM18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5-1h2v2h-4V8h2v3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconWatch;
