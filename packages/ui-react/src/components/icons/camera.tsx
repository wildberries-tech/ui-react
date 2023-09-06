import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCamera = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.937 5.845c.07-.098.15-.219.25-.381l.21-.347h.001l.084-.139C8.31 3.622 8.913 3 10 3h4c1.087 0 1.69.622 2.518 1.978l.084.139.211.347c.1.162.18.283.25.381.047.065.088.117.12.155H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.816c.033-.038.074-.09.121-.155ZM4 8a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3c-.664 0-1.112-.364-1.56-.987a8.42 8.42 0 0 1-.329-.499 82.367 82.367 0 0 1-.226-.372l-.073-.12C14.36 5.282 14.087 5 14 5h-4c-.087 0-.36.282-.812 1.022l-.073.12-.226.372c-.123.2-.225.356-.328.5C8.112 7.635 7.664 8 7 8H4Zm16 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 13a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm8 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCamera;
