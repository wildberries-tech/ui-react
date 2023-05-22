import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconWarningRed = (props: IProps) => (
    <SVG {...props.svg}>
        <circle
            cx="12"
            cy="12"
            r="12"
            fill="#F96666"
        />
        <path
            d="M13.3201 4.6665V10.3865C13.3201 10.9932 13.2868 11.5932 13.2201 12.1865C13.1601 12.7798 13.0735 13.3965 12.9601 14.0365H11.1001C10.9868 13.3965 10.8968 12.7798 10.8301 12.1865C10.7701 11.5932 10.7401 10.9932 10.7401 10.3865V4.6665H13.3201ZM10.3701 17.7265C10.3701 17.5065 10.4101 17.2998 10.4901 17.1065C10.5768 16.9065 10.6935 16.7365 10.8401 16.5965C10.9868 16.4498 11.1568 16.3365 11.3501 16.2565C11.5501 16.1698 11.7668 16.1265 12.0001 16.1265C12.2268 16.1265 12.4368 16.1698 12.6301 16.2565C12.8301 16.3365 13.0035 16.4498 13.1501 16.5965C13.2968 16.7365 13.4135 16.9065 13.5001 17.1065C13.5868 17.2998 13.6301 17.5065 13.6301 17.7265C13.6301 17.9532 13.5868 18.1632 13.5001 18.3565C13.4135 18.5498 13.2968 18.7198 13.1501 18.8665C13.0035 19.0065 12.8301 19.1165 12.6301 19.1965C12.4368 19.2765 12.2268 19.3165 12.0001 19.3165C11.7668 19.3165 11.5501 19.2765 11.3501 19.1965C11.1568 19.1165 10.9868 19.0065 10.8401 18.8665C10.6935 18.7198 10.5768 18.5498 10.4901 18.3565C10.4101 18.1632 10.3701 17.9532 10.3701 17.7265Z"
            fill="white"
        />
    </SVG>
);

export default IconWarningRed;