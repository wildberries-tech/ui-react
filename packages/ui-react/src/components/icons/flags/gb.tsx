import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconFlagsGB = (props: IProps) => (
    <SVG
        {...props.svg}
        viewBox="0 0 640 480"
    >
        <defs>
            <clipPath id="clip">
                <rect
                    x="0"
                    y="0"
                    width="640"
                    height="480"
                    fill="none"
                />
            </clipPath>
        </defs>
        <g>
            <g
                clipPath="url(#clip)"
                transform=""
            >
                <path
                    fill="#00247d"
                    id="none"
                    d="M0 0h640v480H0"
                    transform=""
                />
                <defs>
                    <clipPath id="c">
                        <rect
                            x="0"
                            y="0"
                            width="640"
                            height="480"
                            fill="none"
                        />
                    </clipPath>
                </defs>
                <g
                    transform="scale(1)"
                    clipPath="url(#c)"
                >
                    <rect
                        x="0"
                        y="0"
                        width="640"
                        height="480"
                        fill="#00247d"
                    />
                    <path
                        fill=""
                        id="p"
                        d="M0 0l640 480m-640 0l640 -480"
                        strokeWidth="90"
                        stroke="#fff"
                        transform=""
                    />
                    <path
                        fill=""
                        id="p"
                        d="M-20-5L320 255M660-30L320 230M660 485L320 235M-20 510L320 250"
                        strokeWidth="40"
                        stroke="#cf142b"
                        transform=""
                    />
                    <line
                        x1="-320"
                        y1="240"
                        x2="960"
                        y2="240"
                        strokeWidth="99"
                        stroke="#fff"
                    />
                    <line
                        x1="320"
                        y1="-80"
                        x2="320"
                        y2="560"
                        strokeWidth="99"
                        stroke="#fff"
                    />
                    <line
                        x1="-320"
                        y1="240"
                        x2="960"
                        y2="240"
                        strokeWidth="60"
                        stroke="#cf142b"
                    />
                    <line
                        x1="320"
                        y1="0"
                        x2="320"
                        y2="480"
                        strokeWidth="60"
                        stroke="#cf142b"
                    />
                </g>
            </g>
        </g>
    </SVG>
);

export default IconFlagsGB;
