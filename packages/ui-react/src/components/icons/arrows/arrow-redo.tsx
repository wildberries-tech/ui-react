import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowRedo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M20 11.366V6h2v9h-9v-2h5.732c-.552-.718-1.358-1.776-1.781-2.24C15.332 8.983 13.59 8 11.5 8 6.395 8 4 11.397 4 16H2c0-5.588 3.11-10 9.5-10 2.739 0 4.966 1.258 6.93 3.413.42.461 1.07 1.299 1.57 1.953Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowRedo;
