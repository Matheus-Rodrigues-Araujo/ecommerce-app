import Image from 'next/image';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { GlobalContextProvider, useGlobalContext } from '../context/store';

const MockProductCard = ({ item }) => {
  const { data, setData } = useGlobalContext();

  return (
    <GlobalContextProvider>
      <ProductCard item={item} />
    </GlobalContextProvider>
  );
};

MockProductCard.displayName = 'MockProductCard';

jest.mock('next/image', () => ({ src, alt }) => <Image src={src} alt={alt} />);


describe('ProductCard', () => {
  const mockItem = {
    id: 1,
    photo: 'mock-photo-url',
    name: 'Mock Product',
    price: '$10.00',
    description: 'Mock product description',
  };

  it('renders ProductCard component', () => {
    render(<MockProductCard item={mockItem} />);

    expect(screen.getByText('Mock Product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('handles button click and adds item to context', async () => {
    render(<MockProductCard item={mockItem} />);

    fireEvent.click(screen.getByText('Comprar'));

    await waitFor(() => {
      const contextData = data;
      expect(contextData).toContainEqual({
        total: 1,
        photo: 'mock-photo-url',
        name: 'Mock Product',
        price: '$10.00',
      });
    });
  });
});
