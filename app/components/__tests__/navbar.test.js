import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

jest.mock('../context/store', () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock('../components/Sidebar', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-sidebar" />,
    displayName: 'Sidebar',
  };
});

describe('Navbar', () => {
  it('renders navbar correctly with total items', () => {
    const mockContextValue = {
      data: [
        {
          id: 1,
          photo: 'sample-photo.jpg',
          name: 'Sample Product',
          price: 19.99,
          total: 2,
        },
        {
          id: 2,
          photo: 'sample-photo2.jpg',
          name: 'Another Product',
          price: 29.99,
          total: 1,
        },
      ],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText, getByTestId } = render(<Navbar />);

    expect(getByText('MKS Sistemas')).toBeInTheDocument();

    const shopCarButton = getByTestId('shop-car-btn');
    expect(shopCarButton).toBeInTheDocument();

    expect(() => getByTestId('mock-sidebar')).toThrow();
    
    fireEvent.click(shopCarButton);

    expect(getByTestId('mock-sidebar')).toBeInTheDocument();
  });
});
