import Image from "next/image"
import { ItemType } from "../context/store"
import { useGlobalContext } from "../context/store"
import { useState } from "react"

interface IShopItem{
    item: ItemType
}

export default function ShopCarItem({item}:IShopItem){
    const {data, setData} = useGlobalContext()
    const [quantity, setQuantity] = useState(item.total || 0);

    const updateProductTotalPrice = (quantity: number) => {
        const newData = data.map((product) => {
          if (product.name === item.name) {
            return { ...product, total: quantity };
          }
          return product;
        });
        setData(newData);
      };
    
    const decreaseTotal = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
          updateProductTotalPrice(quantity - 1);
        }
      };
    
      const increaseTotal = () => {
        setQuantity(quantity + 1);
        updateProductTotalPrice(quantity + 1);
      };


    return (
        <li className='shop-item bg-white w-[95%] h-[90px] rounded-[8px] p-5 flex items-center justify-between' >
            <Image src={item.photo} width={50} height={50} alt='product' />
            <p  className='text-[13px] font-[400] w-[85px] ' style={{color: 'rgba(44, 44, 44, 1)'}} >{item.name}</p>

            <div className='grid' >
                <p className='uppercase text-[8px]' >Qtd</p>
                <div className='counter flex gap-3 justify-center' >
                    <button className='remove-btn' onClick={decreaseTotal} >-</button>
                    <p className="quantity" >{item.total ? item.total : 0}</p>
                    <button className='add-btn' onClick={increaseTotal} >+</button>
                </div>
            </div>
            <p className='total-price font-[700] mt-2'>R${item.price *item.total}</p>
        </li>
    )
}