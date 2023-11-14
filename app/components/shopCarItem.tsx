import Image from "next/image"
import { ItemType } from "../context/store"
import { useGlobalContext } from "../context/store"
interface IShopItem{
    item: ItemType
}


export default function ShopCarItem({item}:IShopItem){
    const {data, setData} = useGlobalContext()

    return (
        <li className='shop-item bg-white w-[95%] h-[90px] rounded-[8px] p-5 flex items-center justify-between' >
            <Image src={item.photo} width={50} height={50} alt='product' />
            <p  className='text-[13px] font-[400] w-[85px] ' style={{color: 'rgba(44, 44, 44, 1)'}} >{item.name}</p>

            <div className='grid' >
                <p className='uppercase text-[8px]' >Qtd</p>
                <div className='counter flex gap-3 justify-center' >
                    <button className='remove-btn' >-</button>
                    <p>{item.total}</p>
                    <button className='add-btn'>+</button>
                </div>
            </div>
            <p className='total-price font-[700] mt-2'>R${item.price *item.total}</p>
        </li>
    )
}