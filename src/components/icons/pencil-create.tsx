import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconPencilCreate = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M16.437 2c.655 0 1.283.261 1.741.723l3.101 3.101a2.462 2.462 0 0 1 0 3.482L9.958 20.624c-.699.806-1.69 1.3-2.823 1.378H2v-1l.003-4.215c.085-1.054.576-2.035 1.323-2.694l11.37-11.368A2.456 2.456 0 0 1 16.436 2ZM7.064 20.005c.534-.038 1.031-.287 1.43-.743l7.563-7.562-3.755-3.755-7.606 7.605c-.405.358-.656.86-.696 1.318v3.135l3.064.002ZM13.717 6.53l3.754 3.754 2.394-2.393a.462.462 0 0 0 0-.653L16.76 4.135a.456.456 0 0 0-.647 0L13.717 6.53Z" clipRule="evenodd" />
    </SVG>
);

export default IconPencilCreate;
