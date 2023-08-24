import React from 'react';
import * as renderer from 'react-test-renderer';

import { Text, typographyTextSize, typographyTextTags } from '..';
import { typographyColor } from '../../types';
import { Button } from '../../../button/v1';

describe('Text', () => {
    typographyTextSize.map((size) => {
        test(size, () => {
            const tree = renderer.create(
                <Text
                    key={size}
                    presetSize={size}
                >
                    {size}
                </Text>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});

describe('Text', () => {
    typographyTextTags.map((tag) => {
        test(tag, () => {
            const tree = renderer.create(
                <Text
                    key={tag}
                    tagName={tag}
                >
                    {tag}
                </Text>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});

describe('Text', () => {
    typographyColor.map((color) => {
        test(color, () => {
            const tree = renderer.create(
                <Text
                    key={color}
                    presetColor={color}
                >
                    {color}
                </Text>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});

describe('Component as prop', () => {
    typographyColor.map((color) => {
        test(color, () => {
            const tree = renderer.create(
                <Text
                    tagName={Button}
                    key={color}
                    presetColor={color}
                >
                    {color}
                </Text>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
