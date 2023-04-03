import React from 'react';
import * as renderer from 'react-test-renderer';

import { Loader, IProps } from '..';

const PRESET_SIZE: Array<NonNullable<IProps['presetSize']>> = ['small', 'medium', 'large'];
const PRESET_STYLE: Array<NonNullable<IProps['presetStyle']>> = ['white', 'rich-grey', 'grey', 'red', 'light-green', 'dark-purple'];

test('No props', () => {
    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
});

for(const size of PRESET_SIZE) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    test(`Only size ${size}`, () => {
        const tree = renderer
            .create(
                <Loader
                    presetSize={size}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    for(const style of PRESET_STYLE) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        test(`Only style ${style}`, () => {
            const tree = renderer
                .create(
                    <Loader
                        presetStyle={style}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        // eslint-disable-next-line @typescript-eslint/no-loop-func
        test(`${size} ${style}`, () => {
            const tree = renderer
                .create(
                    <Loader
                        presetSize={size}
                        presetStyle={style}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });
    }
}
