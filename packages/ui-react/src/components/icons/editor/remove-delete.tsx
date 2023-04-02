import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorDelete = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8c-.505 0-.733-.186-1.197-.682a9.802 9.802 0 0 1-.572-.677L.699 12l.534-.64 4.95-5.935a8.13 8.13 0 0 1 .445-.573c.073-.086.145-.167.217-.241C7.23 4.209 7.516 4 8 4Zm.15 2.148c-.136.16-.26.325-.382.492L3.302 12l4.492 5.393A8.853 8.853 0 0 0 8.31 18H21V6H8.283c-.041.043-.086.093-.133.148Zm8.143 2.145L14 10.586l-2.293-2.293-1.414 1.414L12.586 12l-2.293 2.293 1.414 1.414L14 13.414l2.293 2.293 1.414-1.414L15.414 12l2.293-2.293-1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorDelete;
