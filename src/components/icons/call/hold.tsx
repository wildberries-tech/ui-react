import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCallHold = (props: IProps) => (
    <SVG {...props.svg}>
        <path fill="#4E4E53" fillRule="evenodd" d="M10.857 8.338c.518-.698.704-1.434.118-2.084-1.315-1.84-2.2-2.978-2.754-3.525-1.055-1.042-2.79-.901-3.703-.001-.49.483-.657.649-1.16 1.16C.552 6.697 2.263 12.63 6.812 17.184c4.547 4.552 10.48 6.264 13.292 3.45.465-.447.859-.841 1.169-1.169.895-.946 1.03-2.604-.006-3.682-.532-.552-1.617-1.393-3.534-2.765-.587-.525-1.284-.411-1.922.007-.307.202-.53.406-.952.828l-.767.767c-.1.1-1.47-.586-2.801-1.917C9.96 11.37 9.274 9.999 9.374 9.899l.767-.768c.134-.134.198-.198.28-.285.171-.18.313-.343.436-.508Zm4.649 7.695.766-.767a6.86 6.86 0 0 1 .505-.474c1.68 1.206 2.653 1.965 3.05 2.378.239.248.202.7-.006.919-.287.303-.66.677-1.117 1.118-1.818 1.819-6.608.437-10.479-3.438-3.872-3.876-5.253-8.666-3.449-10.472.502-.509.66-.668 1.144-1.144.182-.179.676-.22.896-.001.427.422 1.22 1.436 2.385 3.06-.06.074-.136.159-.228.255-.067.071-.123.128-.246.25l-.766.767c-1.303 1.303-.193 3.52 1.916 5.632 2.108 2.11 4.326 3.22 5.629 1.917ZM15 2h2v8h-2V2Zm6 0h-2v8h2V2Z" clipRule="evenodd" />
    </SVG>
);

export default IconCallHold;
