import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconLightningNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8.216 9.63 1.293 2.707l1.414-1.414 20 20-1.414 1.414-6.766-6.766L9 22.852V15H3.92l4.296-5.37Zm4.889 4.889-3.466-3.466L8.08 13H11v4.15l2.104-2.631Zm-2.391-8.012L15 1.149V9h5.08l-3.054 3.819-1.423-1.423.316-.396h-.712L13 8.793V6.85l-.863 1.079-1.423-1.423Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconLightningNo;
