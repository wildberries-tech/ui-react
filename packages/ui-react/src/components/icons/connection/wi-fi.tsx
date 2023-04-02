import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionWiFi = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.075 9.1 2 9.177l1.414 1.414.075-.075c4.661-4.661 12.203-4.686 16.895-.075l1.414-1.414C16.325 3.633 7.518 3.658 2.075 9.1Zm2.678 2.829c3.905-3.905 10.237-3.905 14.142 0l-1.414 1.414a8 8 0 0 0-11.314 0L4.753 11.93Zm11.314 2.828a6 6 0 0 0-8.486 0l1.415 1.415a4 4 0 0 1 5.656 0l1.415-1.415Zm-2.829 2.829a2 2 0 0 0-2.828 0L11.824 19l1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionWiFi;
