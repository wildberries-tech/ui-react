import React from 'react';
import * as renderer from 'react-test-renderer';

import { Title, typographyTitleTags } from '..';
import { typographyColor } from '../../types';

describe('Title', () => {
    typographyTitleTags.map((tag) => {
        return typographyColor.map((color) => {
            test(`${tag}: ${color}`, () => {
                const tree = renderer.create(
                    <Title
                        key={`${tag}: ${color}`}
                        tagName={tag}
                        presetColor={color}
                    >
                        {`${tag}: ${color}`}
                    </Title>
                ).toJSON();

                expect(tree).toMatchSnapshot();
            });
        });
    });
});
