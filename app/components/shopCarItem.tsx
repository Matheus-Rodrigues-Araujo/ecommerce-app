import Image from "next/image"
import { ItemType } from "../types/ItemType"
import { IShopItem } from '../interfaces/IShopItem'
import { useGlobalContext } from "../context/store"
import { useState } from "react"
import { SCShopCarItem } from "../styledComponents/SCShopCarItem"
import { SCCounterContainer } from "../styledComponents/SCCounterContainer"


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

    const removeItem = () => {
      const newData = data.filter((product) => product.name !== item.name)
      setData(newData)
    }

    return (
          <SCShopCarItem>
            <Image src={item.photo} width={50} height={50} alt='product' />
            <p  className='text-[13px] font-[400] w-[85px] ' style={{color: 'rgba(44, 44, 44, 1)'}} >{item.name}</p>

            <SCCounterContainer>
                <p className='uppercase text-[8px]' >Qtd</p>
                <div className='counter' >
                    <button className='remove-btn' onClick={decreaseTotal} >-</button>
                    <p className="quantity" >{item.total ? item.total : 0}</p>
                    <button className='add-btn' onClick={increaseTotal} >+</button>
                </div>
            </SCCounterContainer>
            <p className='total-price font-[700] mt-2'>R${item.price *item.total}</p>
            <button className="delete-item-btn" onClick={removeItem} >X</button>
        </SCShopCarItem>
    )
}