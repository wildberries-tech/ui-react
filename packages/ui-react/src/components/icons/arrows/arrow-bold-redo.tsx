import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBoldRedo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21 19V5.586l-4.003 4.003c-.492-.48-.788-.747-1.15-1.037C14.475 7.455 13.11 7 11 7c-3.886 0-8 3.178-8 7v2.414l1.707-1.707c.041-.041.138-.13.282-.25.25-.205.534-.413.848-.605C6.707 13.316 7.615 13 8.5 13c1.56 0 2.336.448 3.24 1.846L7.585 19H21Zm-4.707-7.293.707.707 2-2V17h-6.586l1.833-1.833-.379-.663C12.454 12.029 11.117 11 8.5 11c-.893 0-1.76.204-2.59.562C7.047 10.076 9.078 9 11 9c1.667 0 2.589.307 3.598 1.114.428.343.778.677 1.695 1.593Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldRedo;
