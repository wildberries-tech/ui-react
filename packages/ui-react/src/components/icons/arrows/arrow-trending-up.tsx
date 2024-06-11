import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowTrendingUp = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.2388 5.31633C23.6137 5.69124 23.6137 6.29908 23.2388 6.67398L14.1188 15.794C13.7439 16.1688 13.136 16.1688 12.7612 15.794L8.63998 11.6728L2.11881 18.194C1.7439 18.5688 1.13606 18.5688 0.761158 18.194C0.386255 17.8191 0.386255 17.2112 0.761158 16.8363L7.96115 9.63633C8.33606 9.26143 8.9439 9.26143 9.31881 9.63633L13.44 13.7575L21.8812 5.31633C22.256 4.94143 22.8639 4.94143 23.2388 5.31633Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.84 5.99516C15.84 5.46496 16.2698 5.03516 16.8 5.03516H22.56C23.0902 5.03516 23.52 5.46496 23.52 5.99516V11.7552C23.52 12.2853 23.0902 12.7152 22.56 12.7152C22.0298 12.7152 21.6 12.2853 21.6 11.7552V6.95516H16.8C16.2698 6.95516 15.84 6.52535 15.84 5.99516Z"
        />
    </SVG>
);

export default IconArrowsArrowTrendingUp;
