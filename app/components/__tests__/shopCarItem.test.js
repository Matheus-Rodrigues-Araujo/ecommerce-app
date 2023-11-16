import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShopCarItem from '../shopCarItem';

jest.mock('../context/store', () => ({
  useGlobalContext: jest.fn(),
}));

const item = {
  id: 1,
  photo: 'sample-photo.jpg',
  name: 'Sample Product',
  price: 19.99,
  total: 2,
};

describe('ShopCarItem', () => {
  it('renders shop car item correctly', () => {
    const mockContextValue = {
      data: [],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText, getByAltText } = render(<ShopCarItem item={item} />);

    expect(getByAltText('product')).toBeInTheDocument();
    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(`Qtd`)).toBeInTheDocument();
    expect(getByText(`R$${item.price * item.total}`)).toBeInTheDocument();
    expect(getByText('X')).toBeInTheDocument();
  });

  it('handles quantity update correctly', () => {
    const mockContextValue = {
      data: [item],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText } = render(<ShopCarItem item={item} />);

    fireEvent.click(getByText('+'));

    expect(mockContextValue.setData).toHaveBeenCalledWith([{ ...item, total: 3 }]);

    fireEvent.click(getByText('-'));

    expect(mockContextValue.setData).toHaveBeenCalledWith([{ ...item, total: 2 }]);
  });

  it('handles item removal correctly', () => {
    const mockContextValue = {
      data: [item],
      setData: jest.fn(),
    };
    require('../context/store').useGlobalContext.mockReturnValue(mockContextValue);

    const { getByText } = render(<ShopCarItem item={item} />);

    fireEvent.click(getByText('X'));

    expect(mockContextValue.setData).toHaveBeenCalledWith([]);
  });
});
