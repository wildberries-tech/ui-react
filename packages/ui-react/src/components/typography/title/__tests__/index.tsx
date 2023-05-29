import React from 'react';
import * as renderer from 'react-test-renderer';

import { Title, typographyTitleTags } from '..';
import { typographyColor } from '../../types';

describe('Text', () => {
    typographyTitleTags.map((tag) => {
        test(tag, () => {
            const tree = renderer.create(
                <Title
                    key={tag}
                    tagName={tag}
                >
                    {tag}
                </Title>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});

describe('Text', () => {
    typographyColor.map((color) => {
        test(color, () => {
            const tree = renderer.create(
                <Title
                    key={color}
                    presetColor={color}
                >
                    {color}
                </Title>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
