import { useQuery } from 'react-query';
import ProductCard from '../components/productCard';
export default function Products() {
  const { data, error, isLoading } = useQuery(
    'products',
    async () => {
      const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
      const data = await response.json();
      return data.products;
    }
  );

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const products = data;

  return (
    <div className="w-100 mt-12 flex justify-center items-center">
      <ul className="products-list">
        {products.length  && products.map((item) => (
          <ProductCard key={item.id} item={item}  />
        ))}
      </ul>
    </div>
  );
}
