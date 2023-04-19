import React, { Fragment, ReactNode, useContext, useMemo } from 'react';
import { Title, Subtitle, Description, Unstyled, Primary, Controls, Stories, DocsContext, SourceContext, DocsContextProps } from '@storybook/blocks';
import { TabsComposition, DesignTokens } from '@wb-tech/ui-react';

import { DocsSetup } from './setup';
import { DocsCSSModule } from './css-module';

export interface IContext extends DocsContextProps {
    attachedCSFFile: {
        meta: {
            component: {
                displayName: string
            },
            parameters: {
                fileName: string,
                css?: {
                    html?: boolean,
                    module?: Record<string, string>
                },
                documentation?: {
                    setup?: {
                        default?: {
                            disabled?: boolean,
                            title?: string
                        },
                        extended?: {
                            title?: string,
                            content?: ReactNode
                        }
                    }
                }
            }
        }
    },
    store: {
        args: {
            argsByStoryId: Record<string, Record<string, unknown>>
        }
    },
    primaryStory: {
        moduleExport: unknown,
        component: any,
        id: string
    }
}

export const DocsAuto = () => {
    const context = useContext(DocsContext) as IContext;
    const parameters = context.attachedCSFFile.meta.parameters;

    const items = useMemo(() => {
        const result = [{
            id     : 'description',
            elTab  : 'Описание и примеры',
            elPanel: (
                <Fragment>
                    <Description />
                    <Stories title="Примеры" />
                </Fragment>
            )
        }, {
            id     : 'setup',
            elTab  : 'Настройка',
            elPanel: (
                <DocsSetup />
            )
        }, {
            id     : 'api',
            elTab  : 'API',
            elPanel: (
                <Fragment>
                    <Primary />
                    <Controls />
                </Fragment>
            )
        }];

        if(parameters.css?.module) {
            result.push({
                id     : 'css-module',
                elTab  : 'API (CSS Module)',
                elPanel: (
                    <DocsCSSModule />
                )
            });
        }

        return result;
    }, [parameters.css?.module]);

    return (
        <DesignTokens>
            <Title />
            <Subtitle />
            <Unstyled>
                <TabsComposition
                    presetStyle="page"
                    items={items}
                />
            </Unstyled>
        </DesignTokens>
    );
};
