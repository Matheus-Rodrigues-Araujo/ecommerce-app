import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { GlobalContextProvider } from '../context/store';
import { useGlobalContext } from '../context/store';
const {data, setData} = useGlobalContext()

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

const MockProductCard = ({ item }) => (
  <GlobalContextProvider>
    <ProductCard item={item} />
  </GlobalContextProvider>
);

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
      const contextData = data
      expect(contextData).toContainEqual({
        total: 1,
        photo: 'mock-photo-url',
        name: 'Mock Product',
        price: '$10.00',
      });
    });
  });
});
