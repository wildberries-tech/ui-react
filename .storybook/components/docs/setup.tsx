import React, { Fragment, ReactNode, useContext, useMemo } from 'react';
import { Title, Subtitle, Heading, Subheading, Primary, Controls, Stories, Markdown, Source, DocsContext, DocsContextProps } from '@storybook/blocks';

import { name } from './../../../packages/ui-react/package.json';

interface IContext extends DocsContextProps {
    attachedCSFFile: {
        meta: {
            component: {
                displayName: string
            },
            parameters: {
                fileName: string,
                documentation?: {
                    setup?: {
                        import?: {
                            version?: string
                        },
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
    primaryStory: {
        moduleExport: unknown
    }
}

export const DocsSetup = () => {
    const context = useContext(DocsContext) as IContext;
    const componentName = context.attachedCSFFile.meta.component.displayName;
    const parameters = context.attachedCSFFile.meta.parameters;
    const setup = parameters.documentation?.setup;

    const elDefault = useMemo(() => {
        if(!setup?.default || setup.default.disabled !== true) {
            return (
                <Fragment>
                    <Heading children={setup?.default?.title ?? 'Обычные'} />
                    <ol>
                        <li>
                            <Markdown
                                children={`Импортируйте \`${componentName}\` в модуль, где вы хотите использовать наш компонент.`}
                            />
                            <Source
                                language="ts"
                                code={`import { ${componentName}, type IProps${componentName} } from '${name}${setup?.import?.version ? setup.import.version : ''}';`}
                            />
                        </li>
                        <li>
                            <Markdown>Добавьте в необходимое место.</Markdown>
                            <Source
                                language="tsx"
                                of={context.primaryStory.moduleExport}
                            />
                        </li>
                    </ol>
                </Fragment>
            );
        }
    }, [setup?.default, context.primaryStory.moduleExport]);

    const elExtended = useMemo(() => {
        if(setup?.extended) {
            return (
                <Fragment>
                    <Heading children={setup.extended.title ?? 'Расширенные'} />
                    {setup.extended.content}
                </Fragment>
            );
        }
    }, [setup?.extended]);

    return (
        <Fragment>
            {elDefault}
            {elExtended}
        </Fragment>
    );
};
