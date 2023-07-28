import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconDelivery = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16.382 7L18.2243 10.6847L21 12.5352V16H19.8293C19.4175 14.8348 18.3062 14 17 14C15.6938 14 14.5825 14.8348 14.1707 16H9.82929C9.41746 14.8348 8.30622 14 7 14C5.69378 14 4.58254 14.8348 4.17071 16H3V7H16.382ZM21 18H19.8293C19.4175 19.1652 18.3062 20 17 20C15.6938 20 14.5825 19.1652 14.1707 18H9.82929C9.41746 19.1652 8.30622 20 7 20C5.69378 20 4.58254 19.1652 4.17071 18H3C1.89543 18 1 17.1046 1 16V7C1 5.89543 1.89543 5 3 5H16.382C17.1395 5 17.832 5.428 18.1708 6.10557L19.7757 9.31526L23 11.4648V16C23 17.1046 22.1046 18 21 18ZM8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17ZM18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconDelivery;