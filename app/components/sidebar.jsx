import ShopCarItem from './shopCarItem';
import { useGlobalContext } from '../context/store';
import { useEffect, useState } from 'react';
import { SCSidebar } from '../styledComponents/SCsidebar';

const Sidebar = ({handleSidebar }) => {
  const {data, setData} = useGlobalContext()
  const [purchasePrice, setPurchasePrice] = useState(0)

  const getTotalPrice = () =>{
    if(data.length >=1){
      const total = data.reduce((acc, item) => acc + item.price * (item.total || 0), 0);
      setPurchasePrice(total)
    }
  }
  useEffect(()=>{
    getTotalPrice()
  }, [data])

  return (
    // <div className={`sidebar absolute top-0 right-0`}>
    <SCSidebar>
      <div className='px-[2.5rem] h-full' >
        <div className="sidebar-header flex items-center justify-between">
          <h2>Carrinho <br/> de compras</h2>
          <button className="close-sidebar-btn" onClick={handleSidebar}>X</button>
        </div>

        <div className='shop-car-container h-full' >
          <ul className='shop-car-list mt-12 overflow-y-auto' style={{maxHeight: '350px'}} >
            {
              data.length ? data.map(item => <ShopCarItem  key={item.id} item={item} />) : ''
            }
          </ul>

          <div className='total-price flex justify-between w-[85%] px-2 mt-5 bottom-28 absolute'>
            <p className='text-white text-[28px] font-[700]'>Total</p>
            <p className='text-white text-[28px] font-[700]'>R${purchasePrice}</p>
          </div>
        </div>
      </div>
      <button className='buy-shop-car-btn absolute bottom-0 bg-black text-white font-[700] w-[100%] w-full p-5 hover:bg-green-600' >Finalizar Compra</button>
    </SCSidebar>
  );
};

export default Sidebar;
