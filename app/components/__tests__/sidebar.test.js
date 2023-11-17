import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

jest.mock('../context/store', () => ({
  useGlobalContext: jest.fn(),
}));

 jest.mock('../components/ShopCarItem', () => {
  const ShopCarItem = () => <div data-testid="mock-shop-car-item" />;
  ShopCarItem.displayName = 'ShopCarItem'; // Add display name here
  return ShopCarItem;
});


describe('Sidebar', () => {
  it('renders sidebar correctly with purchase price', () => {
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

    const { getByText, getByTestId } = render(<Sidebar handleSidebar={() => {}} />);

    expect(getByText('Carrinho de compras')).toBeInTheDocument();
    expect(getByText('X')).toBeInTheDocument();

    expect(getByTestId('mock-shop-car-item')).toHaveLength(mockContextValue.data.length);

    expect(getByText(`Total R$${49.97}`)).toBeInTheDocument();
  });

  it('handles close sidebar correctly', () => {
    const handleSidebarMock = jest.fn();
    const { getByText } = render(<Sidebar handleSidebar={handleSidebarMock} />);

    fireEvent.click(getByText('X'));

    expect(handleSidebarMock).toHaveBeenCalled();
  });

});
