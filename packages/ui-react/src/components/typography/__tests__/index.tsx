import React from 'react';
import * as renderer from 'react-test-renderer';

import { Typography, typographySize, typographyColor, typographyTags } from '..';

describe('Typography', () => {
    typographySize.map((size) => {
        return typographyTags.map((tag) => {
            return typographyColor.map((color) => {
                test(`${size}: ${tag}: ${color}`, () => {
                    const tree = renderer.create(
                        <Typography
                            key={`${size}: ${tag}: ${color}`}
                            size={size}
                            tag={tag}
                            color={color}
                        >
                            {`${size}: ${tag}: ${color}`}
                        </Typography>
                    ).toJSON();

                    expect(tree).toMatchSnapshot();
                });
            });
        });
    });
});
