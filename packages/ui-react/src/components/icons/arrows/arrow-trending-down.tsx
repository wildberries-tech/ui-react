import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowTrendingDown = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.761158 5.31633C1.13606 4.94143 1.7439 4.94143 2.11881 5.31633L8.63998 11.8375L12.7612 7.71633C13.136 7.34143 13.7439 7.34143 14.1188 7.71633L23.2388 16.8363C23.6137 17.2112 23.6137 17.8191 23.2388 18.194C22.8639 18.5688 22.256 18.5688 21.8812 18.194L13.44 9.7528L9.31881 13.874C8.9439 14.2489 8.33606 14.2489 7.96115 13.874L0.761158 6.67398C0.386255 6.29908 0.386255 5.69124 0.761158 5.31633Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.56 10.7954C23.0902 10.7954 23.52 11.2252 23.52 11.7554V17.5154C23.52 18.0456 23.0902 18.4754 22.56 18.4754H16.8C16.2698 18.4754 15.84 18.0456 15.84 17.5154C15.84 16.9852 16.2698 16.5554 16.8 16.5554H21.6V11.7554C21.6 11.2252 22.0298 10.7954 22.56 10.7954Z"
        />
    </SVG>
);

export default IconArrowsArrowTrendingDown;
