import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconEditorSticker = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1h.414L23 11.586V12c0 6.075-4.925 11-11 11ZM3 12a9 9 0 0 0 17.792 1.935A8.778 8.778 0 0 1 10.066 3.209C6.024 4.093 3 7.693 3 12Zm9.066-8.52a6.778 6.778 0 0 0 8.453 8.453l-8.453-8.452Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorSticker;
