import React from 'react';
import renderer from 'react-test-renderer';

import { Loader, IProps } from './../index';

const PRESET_SIZE: Array<IProps['presetSize']> = ['small', 'medium', 'large'];
const PRESET_STYLE: Array<IProps['presetStyle']> = ['white', 'rich-grey', 'grey', 'red', 'light-green', 'dark-purple'];

it('No props', () => {
    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
});

for(const size of PRESET_SIZE) {
    // eslint-disable-next-line no-loop-func
    it(`Only size ${size}`, () => {
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
        // eslint-disable-next-line no-loop-func
        it(`Only style ${style}`, () => {
            const tree = renderer
                .create(
                    <Loader
                        presetStyle={style}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        // eslint-disable-next-line no-loop-func
        it(`${size} ${style}`, () => {
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
