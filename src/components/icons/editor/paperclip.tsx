import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorPaperclip = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m13.343 6.544 1.425 1.403-6.318 6.416a.836.836 0 0 0 0 1.168c.3.307.803.305 1.101-.002l6.951-7.062a2.671 2.671 0 0 0 0-3.734c-.968-.988-2.681-.966-3.63.002l-7.587 7.702a4.505 4.505 0 0 0 0 6.3c1.663 1.698 4.52 1.67 6.158 0l8.85-8.988 1.424 1.403-8.847 8.986c-2.414 2.463-6.56 2.503-9.013 0a6.506 6.506 0 0 1 .001-9.103l7.588-7.702c1.723-1.758 4.724-1.797 6.485 0a4.672 4.672 0 0 1-.002 6.536l-6.947 7.057a2.771 2.771 0 0 1-3.96.004 2.837 2.837 0 0 1 .001-3.969l6.32-6.417Z" clipRule="evenodd" />
    </SVG>
);

export default IconEditorPaperclip;
