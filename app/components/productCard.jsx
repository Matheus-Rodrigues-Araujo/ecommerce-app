import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/store';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import '../../node_modules/react-loading-skeleton/dist/skeleton.css';

export default function ProductCard({ item }) {
  const { data, setData } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handlePurchase = () => {
    const newItem = {
      total: 1,
      photo: item.photo,
      name: item.name,
      price: item.price,
    };

    const existingItem = data.find((existingItem) => existingItem.name === newItem.name);

    if (existingItem) {
      setData((prevItems) =>
        prevItems.map((item) =>
          item.name === existingItem.name ? { ...item, total: item.total + newItem.total } : item
        )
      );
    } else {
      setData((prevItems) => [...prevItems, newItem]);
    }
  };

  return (
    <li key={item.id} className="product-card">
      <div className="product">
        {loading ? (
          <Skeleton height={180} width={280} style={{ backgroundColor: 'var(--blue)' }} className='product-image' />
        ) : (
          item.photo && <Image className="product-image" src={item.photo} height={180} width={180} alt="item photo" />
        )}
        <div className="product-information">
          <div className="info">
            <p className="product-name">{loading ? <Skeleton style={{ backgroundColor: 'var(--blue)' }} /> : item.name}</p>
            <div className="product-price flex justify-center items-center">
              <p>{loading ? <Skeleton style={{ backgroundColor: 'var(--blue)' }} /> : item.price}</p>
            </div>
          </div>
          <p className="description">
            {loading ? <Skeleton style={{ backgroundColor: 'var(--blue)' }} /> : item.description}
          </p>
        </div>
      </div>
      <button className="buy-btn flex" onClick={handlePurchase}>
        Comprar
      </button>
    </li>
  );
}
