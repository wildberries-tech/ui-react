import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsLocationNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m18.587 14.373 1.527 1.527a8.94 8.94 0 0 0 .831-2.9H23v-2h-2.055A9.004 9.004 0 0 0 13 3.055V1h-2v2.055a8.94 8.94 0 0 0-2.9.831l1.527 1.527a7 7 0 0 1 8.96 8.96ZM13 20.945a8.958 8.958 0 0 0 4.618-1.913l3.675 3.675 1.414-1.414-20-20-1.414 1.414 3.675 3.675A8.957 8.957 0 0 0 3.055 11H1v2h2.055A9.004 9.004 0 0 0 11 20.945V23h2v-2.055ZM5 12c0-1.572.518-3.024 1.394-4.192l2.16 2.16a4 4 0 0 0 5.478 5.478l2.16 2.16A7 7 0 0 1 5 12Zm5.068-.518a2 2 0 0 0 2.45 2.45l-2.45-2.45Z" clipRule="evenodd" />
    </SVG>
);

export default IconMapsLocationNo;
