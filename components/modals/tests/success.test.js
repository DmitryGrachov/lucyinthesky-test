import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Success from '../Success';

describe('Success component', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            showModal: true,
            orderId: 18576,
        };
    });

    test('should render orderId', () => {
        const { getByText } = render(<Success {...expectedProps} />);
        const orederId = getByText(expectedProps.orderId);

        expect(orederId).toBeVisible();
    });

    test('matches success snapshot', () => {
        const { asFragment } = render(<Success {...expectedProps} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
