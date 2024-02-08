import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconFlagsCN = (props: IProps) => (
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
                    fill="#de2910"
                    id="none"
                    d="M0 0h640v480H0"
                    transform=""
                />
                <defs>
                    <path
                        fill="#ffde00"
                        id="s"
                        d="M12 7.7l3 9h9l-7.4 5.4 2.8 8.7-7.4-5.4-7.4 5.4 2.8-8.7-7.4-5.4h9.2z"
                        transform=""
                    />
                </defs>
                <use
                    transform="rotate(0) scale(6)"
                    href="#s"
                    x="5"
                    y="2"
                />
                <use
                    transform="rotate(30) scale(2)"
                    href="#s"
                    x="140"
                    y="30"
                />
                <use
                    transform="rotate(0) scale(2)"
                    href="#s"
                    x="120"
                    y="75"
                />
                <use
                    transform="rotate(0) scale(2)"
                    href="#s"
                    x="120"
                    y="35"
                />
                <use
                    transform="rotate(30) scale(2)"
                    href="#s"
                    x="100"
                    y="-50"
                />
            </g>
        </g>
    </SVG>
);

export default IconFlagsCN;
