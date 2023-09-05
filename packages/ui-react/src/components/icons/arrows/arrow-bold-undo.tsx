import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowBoldUndo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3 19h13.414l-4.153-4.154C13.164 13.448 13.939 13 15.5 13c.885 0 1.793.316 2.663.852.314.192.599.4.848.606.144.12.24.208.282.249L21 16.414V14c0-3.822-4.113-7-8-7-2.11 0-3.475.455-4.847 1.552-.362.29-.658.556-1.15 1.037L3 5.586V19Zm2-2v-6.586l2 2 .707-.707c.917-.916 1.266-1.25 1.695-1.593C10.412 9.307 11.332 9 13 9c1.922 0 3.953 1.076 5.09 2.562-.83-.358-1.697-.562-2.59-.562-2.617 0-3.954 1.029-5.368 3.504l-.38.663L11.587 17H5Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldUndo;
