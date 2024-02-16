import React from 'react';
import { create } from 'react-test-renderer';

import { AsyncSelect } from '..';
import { IconVideo } from '../../icons/video';
import { IconSearch } from '../../icons/search';
import { IconDownload } from '../../icons/download';
import { IconCalendar } from '../../icons/calendar';
import { IconBox } from '../../icons/box';
import { IconInfo } from '../../icons/info';

const OPTIONS = [{
    label: 'Мали',
    value: '1'
}, {
    label   : 'Индонезия',
    value   : '2',
    elBefore: <IconVideo />
}, {
    label: 'Болгария',
    value: '3',
    elAfter: <IconSearch />
}, {
    label   : 'Замбия',
    value   : '4',
    elBefore: <IconDownload />,
    elAfter : <IconCalendar />
}, {
    label   : 'Мексика',
    value   : '5',
    elBefore: () => <IconBox />,
    elAfter : () => <IconInfo />
}, {
    label   : 'Кыргызстан',
    value   : '6',
    disabled: true
}, {
    label: 'Кения',
    value: '7'
}, {
    label: 'Фарерские Острова (не признана)',
    value: '8'
}, {
    label: 'Филиппины',
    value: '9'
}, {
    label: 'Армения',
    value: '10'
}];

const sleep = async () => new Promise<void>((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

test('Default', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Default menu open', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            defaultMenuIsOpen={true}
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            isError={true}
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Disabled', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            isDisabled={true}
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Default value', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            defaultMenuIsOpen={true}
            defaultValue={[OPTIONS[0]]}
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            label="Label field"
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <AsyncSelect
            hasMore={false}
            loadCallback={sleep}
            label="Label field"
            options={OPTIONS}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
