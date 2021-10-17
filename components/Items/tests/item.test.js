import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../Item';

describe('Item component', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            name: 'Iridescent Sequin Bodycon Dress in Pink',
            altImage: 'mainImage',
        };
    });

    test('should render name and image', () => {
        const { getByText, getByAltText } = render(<Item {...expectedProps} />);
        const name = getByText(expectedProps.name);
        const altImage = getByAltText(expectedProps.altImage);

        expect(name).toBeVisible();
        expect(altImage).toBeVisible();
    });

    test('matches item snapshot', () => {
        const { asFragment } = render(<Item {...expectedProps} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
