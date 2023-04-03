import React, { Fragment } from 'react';
import { Title, Subtitle, Description, Unstyled, Primary, Controls, Stories, DocsContext, SourceContext } from '@storybook/blocks';
import { TabsComposition, DesignTokens } from '@wb-tech/ui-react';

import { DocsSetup } from './setup';

export const DocsAuto = () => {
    return (
        <DesignTokens>
            <Title />
            <Subtitle />
            <Unstyled>
                <TabsComposition
                    presetStyle="page"
                    items={[{
                        id     : 'description',
                        elTab  : 'Описание и примеры',
                        elPanel: (
                            <Fragment>
                                <Description />
                                <Stories title="Примеры" />
                            </Fragment>
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
                    }, {
                        id     : 'setup',
                        elTab  : 'Настройка',
                        elPanel: (
                            <DocsSetup />
                        )
                    }]}
                />
            </Unstyled>
        </DesignTokens>
    );
};
