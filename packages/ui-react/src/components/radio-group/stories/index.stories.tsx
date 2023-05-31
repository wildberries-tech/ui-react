import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { RadioGroup } from '..';
import { Radio } from '../../radio';

const children = [
    <Radio
        key="1"
        name="name"
        label="label-1"
    />,
    <Radio
        key="2"
        name="name"
        label="label-2"
    />,
    <Radio
        key="3"
        name="name"
        label="label-3"
    />,
    <Radio
        key="4"
        name="name"
        label="label-4"
    />
];

const childrenWithDesc = children.map((item, index) => {
    return (
        <Radio
            key={index}
            description={`Desc-${index}`}
            {...item.props}
        />
    );
});

const META: Meta<typeof RadioGroup> = {
    title: 'Components/Fields/Radios/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    args: {
        children
    },
    parameters: {
        layout: 'padded'
    }
};

export default META;

export const Default: StoryFn<typeof RadioGroup> = (props) => <RadioGroup {...props} />;

export const DefaultColumn: StoryObj<typeof RadioGroup> = {
    args: {
        children,
        direction: 'column'
    }
};

export const Legend: StoryObj<typeof RadioGroup> = {
    args: {
        children,
        legend: 'legend',
        direction: 'column'
    }
};

export const LegendObject: StoryObj<typeof RadioGroup> = {
    args: {
        children,
        legend: {
            presetSize: 'body',
            presetColor: 'error',
            children: 'Errored legend'
        },
        direction: 'column'
    }
};

export const WithDescription: StoryObj<typeof RadioGroup> = {
    args: {
        children: childrenWithDesc,
        direction: 'column'
    }
};
