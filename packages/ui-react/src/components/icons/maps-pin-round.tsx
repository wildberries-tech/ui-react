import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsPinRound = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13.096 18.255 12 19.213l-1.096-.958C6.988 14.837 5 11.811 5 9c0-3.979 3.103-7 7-7 3.896 0 7 3.021 7 7 0 2.811-1.988 5.837-5.904 9.255Zm-7.41-3.452c.41.563.868 1.134 1.371 1.716C5.195 16.939 4 17.534 4 18c0 .807 3.58 2 8 2s8-1.193 8-2c0-.466-1.195-1.062-3.058-1.481a26.43 26.43 0 0 0 1.372-1.716C20.564 15.486 22 16.58 22 18c0 2.507-4.48 4-10 4S2 20.507 2 18c0-1.42 1.437-2.514 3.686-3.197ZM12 4c2.804 0 5 2.138 5 5 0 2.047-1.627 4.566-5 7.556C8.627 13.566 7 11.047 7 9c0-2.862 2.196-5 5-5Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsPinRound;
