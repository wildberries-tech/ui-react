import React, { Fragment } from 'react';
import { Markdown, Source } from '@storybook/blocks';

export const SetupExtended = () => {
    return (
        <Fragment>
            <Markdown>Ниже привед самый популярный пример использования в приложении</Markdown>
            <Source
                language="tsx"
                format={true}
                code={`
import React from 'react';
import { render } from 'react-dom';

import { DesignTokens } from '@wb-tech/ui-react';

render((
    <DesignTokens>
        <YourAppCode />
    </DesignTokens>
), document.getElementById('root'));
`}
            />
        </Fragment>
    );
};
