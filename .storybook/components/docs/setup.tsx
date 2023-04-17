import React, { Fragment, ReactNode, useContext, useMemo } from 'react';
import { Title, Subtitle, Heading, Subheading, Primary, Controls, Stories, Markdown, Source, DocsContext, DocsContextProps } from '@storybook/blocks';

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
                                code={`
import { ${componentName} } from '@wb-tech/ui-react';
// или
import { ${componentName}, type IProps${componentName} } from '@wb-tech/ui-react';
`}
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
