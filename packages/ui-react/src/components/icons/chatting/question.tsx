import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconChattingQuestion = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 22a9.959 9.959 0 0 0 4.86-1.258l4.235.353-.353-4.235A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10Zm4.115-3.138.277-.166 2.513.21-.21-2.514.167-.277a8 8 0 1 0-2.747 2.747Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconChattingQuestion;
