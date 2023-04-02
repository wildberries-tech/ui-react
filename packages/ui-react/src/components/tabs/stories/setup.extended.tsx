import React, { Fragment } from 'react';
import { Markdown, Source } from '@storybook/blocks';

export const SetupExtended = () => {
    return (
        <Fragment>
            <Markdown>
                Вместо того, чтобы использовать единый компонент, который отвечает за все аспекты вкладок (список вкладок, содержимое вкладок, состояние активной вкладки и т.д.), мы можем использовать его подкомпонены и делегировать им определенные задачи.
                Это делает компонент `Tabs` более гибким и переиспользуемым.
            </Markdown>
            <Markdown>Компонент `Tabs` состоит из четырех подкомпонентов: `Tab`, `TabList`, `TabPanel` и `Tabs`.</Markdown>
            <Markdown>`TabList` - компонент, который отображает список вкладок.</Markdown>
            <Markdown>`TabPanel` - компонент, который отображает содержимое каждой вкладки.</Markdown>
            <Markdown>`Tab` - компонент, который отображает содержимое вкладки.</Markdown>
            <Markdown>`Tabs` - компонент, который объединяет `TabList`, `Tab` и `TabPanel`</Markdown>
            <ol>
                <li>
                    <Markdown
                        children="Импортируйте `Tab`, `TabList`, `TabPanel` и `Tabs` в модуль, где вы хотите использовать наш компонент."
                    />
                    <Source
                        language="ts"
                        code="import { Tab, TabList, TabPanel, Tabs } from '@wb-tech/ui-react';"
                    />
                </li>
                <li>
                    <Markdown>Добавьте в необходимое место.</Markdown>
                    <Source
                        language="tsx"
                        format={true}
                        code={`
<Tabs presetStyle="pane">
    <TabList>
        <Tab>Таб #1</Tab>
        <Tab>Таб #2</Tab>
    </TabList>
    <TabPanel>Панель #1</TabPanel>
    <TabPanel>Панель #2</TabPanel>
</Tabs>
`}
                    />
                </li>
            </ol>
        </Fragment>
    );
};
