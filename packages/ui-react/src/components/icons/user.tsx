import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconUser = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M14.428 12.274a4.768 4.768 0 0 0 2.29-4.084c0-2.63-2.113-4.762-4.719-4.762-2.606 0-4.719 2.132-4.719 4.762 0 1.734.918 3.25 2.29 4.084-3.55 1.057-6.142 4.372-6.142 8.297H5.47c0-3.638 2.923-6.588 6.528-6.588 3.606 0 6.529 2.95 6.529 6.588h2.043c0-3.925-2.592-7.24-6.143-8.297Zm.247-4.084c0 1.492-1.198 2.7-2.676 2.7-1.478 0-2.676-1.208-2.676-2.7 0-1.49 1.198-2.7 2.676-2.7 1.478 0 2.676 1.209 2.676 2.7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconUser;
