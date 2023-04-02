import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorEraser = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12.092 3.23a3 3 0 0 1 4.243 0l4.243 4.242a3 3 0 0 1 0 4.242L13.293 19H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h4.064l-3.75-3.75a3 3 0 0 1 0-4.243l7.778-7.778Zm2.829 11.313L9.264 8.886 5.73 12.422a1 1 0 0 0 0 1.414l4.242 4.242a1 1 0 0 0 1.414 0l3.536-3.535Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorEraser;
