import React, { SVGAttributes, ReactNode } from 'react';

export interface IProps extends SVGAttributes<SVGElement> {
    readonly children?: ReactNode,
    readonly className?: string
}

export const SVG = ({
    xmlns = 'http://www.w3.org/2000/svg',
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    ...props
}: IProps) => (
    <svg
        xmlns={xmlns}
        width={width}
        height={height}
        viewBox={viewBox}
        {...props}
    />
);
