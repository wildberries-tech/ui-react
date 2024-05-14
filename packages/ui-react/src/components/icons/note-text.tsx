import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconNoteText = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 20C2 21.1046 2.89543 22 4 22H17.4142L22 17.4142V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20ZM4 4H20V15H17C15.8954 15 15 15.8954 15 17V20H4V4ZM17 17H19.5858L17 19.5858V17ZM7 15V17H13V15H7ZM7 13V11H17V13H7ZM7 7V9H17V7H7Z"
        />
    </SVG>
);

export default IconNoteText;
