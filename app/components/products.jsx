'use client'
import useSWR from 'swr'
import ProductCard from '../components/productCard'
import { useGlobalContext } from '../context/store'
import { useState } from 'react'

export default function Products(){
    const [purchaseList, setPurchaseList] = useState([])
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC', fetcher)
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