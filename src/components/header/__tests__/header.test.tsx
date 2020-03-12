import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from '../header';

describe('Components/AvailableOn', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render as expected, without crashing', () => {
        const { container } = render(<Header />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
