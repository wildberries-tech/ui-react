import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorPoll = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21 5.002a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1Zm-9.793 9.293a1 1 0 0 1 0 1.415l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.415L6 18.088l3.793-3.793a1 1 0 0 1 1.414 0ZM20 11.002a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2h7Zm1 4a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1ZM9.707 6.124A1 1 0 1 0 8.293 4.71L6.207 6.795 4.121 4.71a1 1 0 0 0-1.414 1.414L4.793 8.21l-2.086 2.085a1 1 0 1 0 1.414 1.415l2.086-2.086 2.086 2.086a1 1 0 1 0 1.414-1.415L7.621 8.21l2.086-2.086ZM20 21.002a1 1 0 1 0 0-2h-9a1 1 0 0 0 0 2h9Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorPoll;
