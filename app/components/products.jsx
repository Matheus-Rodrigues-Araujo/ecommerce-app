'use client'
import useSWR from 'swr'
import ProductCard from '../components/productCard'
import { useGlobalContext } from '../context/store'
import { useState } from 'react'
// const api = process.env.NEXT_PUBLIC_API
const api = process.env.NEXT_PUBLIC_API

export default function Products(){
    const [purchaseList, setPurchaseList] = useState([])
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(api+'?page=1&rows=8&sortBy=id&orderBy=DESC', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const products = data && data.products && data.products;

    return(
      <div className="w-100 flex justify-center items-center" >
        <ul className="products-list" >
          {products.length && products.map((item) => (<ProductCard  key={item.id} item={item} />))}
        </ul>
      </div>
    )
}