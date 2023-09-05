import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCameraCreate = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.937 5.845c.07-.098.15-.219.25-.381l.211-.347.084-.139C8.31 3.622 8.913 3 10 3h5v2h-5c-.087 0-.36.282-.812 1.022l-.073.12-.226.372c-.123.2-.225.356-.328.5C8.112 7.635 7.664 8 7 8H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6h2v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.816c.033-.038.074-.09.121-.155ZM17 8V6h2V4h2v2h2v2h-2v2h-2V8h-2Zm-5 10a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCameraCreate;
