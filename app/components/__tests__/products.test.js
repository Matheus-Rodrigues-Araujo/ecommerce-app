import { render, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Products from './Products';

const server = setupServer(
  rest.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
    },
  },
});

test('renders Products component with data', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});

test('renders Products component with loading state', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );

  expect(screen.getByText('loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText('loading...')).toBeNull();
  });
});

test('renders Products component with error state', async () => {
  server.use(
    rest.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', (req, res, ctx) => {
    })
  );

  render(
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('failed to load')).toBeInTheDocument();
  });
});
