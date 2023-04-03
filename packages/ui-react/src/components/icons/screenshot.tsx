import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconScreenshot = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3ZM21 5H3v14h18V5ZM11 7c-.72 0-1.327.306-1.816.788A3.541 3.541 0 0 0 8.986 8H8.4C7.059 8 6 9.134 6 10.5v4C6 15.866 7.059 17 8.4 17h7.2c1.342 0 2.4-1.134 2.4-2.5v-4C18 9.134 16.942 8 15.6 8h-.586a3.547 3.547 0 0 0-.198-.212C14.326 7.306 13.719 7 13 7h-2Zm0 2c-.13 0-.267.07-.412.212a1.27 1.27 0 0 0-.204.256l-.282.532H8.4c-.205 0-.4.209-.4.5v4c0 .291.195.5.4.5h7.2c.205 0 .4-.209.4-.5v-4c0-.291-.195-.5-.4-.5h-1.702l-.282-.532a1.27 1.27 0 0 0-.204-.256C13.267 9.07 13.129 9 13 9h-2Zm-1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconScreenshot;
