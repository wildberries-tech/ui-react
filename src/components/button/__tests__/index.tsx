import React from 'react';
import renderer from 'react-test-renderer';

import { Button, IProps } from './../index';

const PRESET_SIZE: Array<IProps['presetSize']> = ['large', 'medium', 'small'];
const PRESET_STYLE: Array<IProps['presetStyle']> = ['default', 'dashed', 'success', 'negative', 'primary', 'accent'];

const CHILDREN = 'Рыбный текст кнопки';

it('Default', () => {
    const tree = renderer.create(<Button children={CHILDREN} />).toJSON();

    expect(tree).toMatchSnapshot();
});

for(const size of PRESET_SIZE) {
    // eslint-disable-next-line no-loop-func
    it(`Only size ${size}`, () => {
        const tree = renderer
            .create(
                <Button
                    presetSize={size}
                    children={CHILDREN}
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
                    <Button
                        presetStyle={style}
                        children={CHILDREN}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        // eslint-disable-next-line no-loop-func
        it(`${size} ${style}`, () => {
            const tree = renderer
                .create(
                    <Button
                        presetSize={size}
                        presetStyle={style}
                        children={CHILDREN}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        // eslint-disable-next-line no-loop-func
        it(`${size} ${style} disabled`, () => {
            const tree = renderer
                .create(
                    <Button
                        presetSize={size}
                        presetStyle={style}
                        disabled={true}
                        children={CHILDREN}
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });
    }
}
