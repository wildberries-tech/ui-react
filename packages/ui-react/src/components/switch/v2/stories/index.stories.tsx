/* eslint-disable react/no-multi-comp */
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Switch } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Switch> = {
    title: 'Version 2 (Beta)/Components/Fields/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        name: 'my-switch'
    },
    parameters: {
        css: {
            module
        },
        documentation: {
            setup: {
                import: {
                    version: '/v2'
                }
            }
        }
    }
};

export default META;

export const Default: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                />
            </div>
        </React.Fragment>
    );
};

export const Label: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                    label="Checkbox label"
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                    label="Checkbox label"
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                    label="Checkbox label"
                />
            </div>
        </React.Fragment>
    );
};

export const Disable: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                    label="Checkbox label"
                    disabled={true}
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                    label="Checkbox label"
                    disabled={true}
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                    label="Checkbox label"
                    disabled={true}
                />
            </div>
        </React.Fragment>
    );
};

export const DisableActive: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                    label="Checkbox label"
                    disabled={true}
                    checked={true}
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                    label="Checkbox label"
                    disabled={true}
                    checked={true}
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                    label="Checkbox label"
                    disabled={true}
                    checked={true}
                />
            </div>
        </React.Fragment>
    );
};

export const Loading: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                    label="Checkbox label"
                    loading={true}
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                    label="Checkbox label"
                    loading={true}
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                    label="Checkbox label"
                    loading={true}
                />
            </div>
        </React.Fragment>
    );
};

export const LoadingActive: StoryFn<typeof META> = () => {
    return (
        <React.Fragment>
            <div>
                <span>Size: sm</span>
                <Switch
                    name="default"
                    size="sm"
                    label="Checkbox label"
                    loading={true}
                    checked={true}
                />
            </div>
            <div>
                <span>Size: md</span>
                <Switch
                    name="default"
                    label="Checkbox label"
                    loading={true}
                    checked={true}
                />
            </div>
            <div>
                <span>Size: lg</span>
                <Switch
                    name="default"
                    size="lg"
                    label="Checkbox label"
                    loading={true}
                    checked={true}
                />
            </div>
        </React.Fragment>
    );
};
