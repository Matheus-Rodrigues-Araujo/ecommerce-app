import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

jest.mock('../context/store', () => ({
  useGlobalContext: jest.fn(),
}));

const item = {
  id: 1,
  photo: 'sample-photo.jpg',
  name: 'Sample Product',
  price: 19.99,
  description: 'Sample description',
};

describe('ProductCard', () => {
  it('renders product card correctly', () => {
    const mockContextValue = {
      data: [],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText, getByAltText } = render(<ProductCard item={item} />);

    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(`$${item.price}`)).toBeInTheDocument();
    expect(getByText(item.description)).toBeInTheDocument();
    expect(getByAltText('item photo')).toBeInTheDocument();
  });

  it('handles purchase correctly', () => {
    const mockContextValue = {
      data: [],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText } = render(<ProductCard item={item} />);

    fireEvent.click(getByText('Comprar'));

    expect(mockContextValue.setData).toHaveBeenCalledWith([
      {
        total: 1,
        photo: item.photo,
        name: item.name,
        price: item.price,
      },
    ]);

    fireEvent.click(getByText('Comprar'));

    expect(mockContextValue.setData).toHaveBeenCalledWith([
      {
        total: 2,
        photo: item.photo,
        name: item.name,
        price: item.price,
      },
    ]);
  });
});
