import React from 'react';
import * as renderer from 'react-test-renderer';

import { Text, typographyTextSize, typographyTextTags } from '..';
import { typographyColor } from '../../types';

describe('Text', () => {
    typographyTextSize.map((size) => {
        return typographyTextTags.map((tag) => {
            return typographyColor.map((color) => {
                test(`${size}: ${tag}: ${color}`, () => {
                    const tree = renderer.create(
                        <Text
                            key={`${size}: ${tag}: ${color}`}
                            presetSize={size}
                            tagName={tag}
                            presetColor={color}
                        >
                            {`${size}: ${tag}: ${color}`}
                        </Text>
                    ).toJSON();

                    expect(tree).toMatchSnapshot();
                });
            });
        });
    });
});
