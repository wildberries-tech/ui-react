import React, { Fragment, useContext, useMemo } from 'react';
import { renderToString } from 'react-dom/server';
import { Title, Subtitle, Heading, Subheading, Primary, Controls, Stories, Markdown, Source, DocsContext } from '@storybook/blocks';

import type { IContext } from './auto';

export const DocsCSSModule = () => {
    const context = useContext(DocsContext) as IContext;
    const primaryStory = context.primaryStory;
    const store = context.store;
    const parameters = context.attachedCSFFile.meta.parameters;

    const elClassList = useMemo(() => {
        const classes = parameters.css?.module;

        if(classes) {
            const keys = Object.keys(classes);

            return (
                <Fragment>
                    <Heading children="Список CSS классов" />
                    <ul>
                        {keys.map((key) => (
                            <li
                                key={key}
                                children={key}
                            />
                        ))}
                    </ul>
                </Fragment>
            );
        }
    }, [parameters.css?.module]);

    const elCode = useMemo(() => {
        const classes = parameters.css?.module;

        if(classes && parameters.css?.html !== false) {
            let code = renderToString(<primaryStory.component {...store.args.argsByStoryId[primaryStory.id]} />);

            for(const key in classes) {
                code = code.replaceAll(classes[key], key);
            }

            return (
                <Fragment>
                    <Heading children="HTML структура" />
                    <Source
                        language="html"
                        format="html"
                        code={code}
                    />
                </Fragment>
            );
        }
    }, [parameters.css?.module, parameters.css?.html]);

    return (
        <Fragment>
            {elClassList}
            {elCode}
        </Fragment>
    );
};
