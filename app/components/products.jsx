import Image from "next/image"
import ProductCard from '../components/productCard'

const getProducts = async() =>{
    const res = await fetch(process.env.API_URL+'?page=1&rows=8&sortBy=id&orderBy=DESC', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    return data
  }

export default async function Products(){
    const data = await getProducts()
    const {products} = data

    return(
      <div className="w-100 flex justify-center items-center" >
        <ul className="products-list" >
          {products.map((item) => (<ProductCard item={item} />))}
        </ul>
      </div>
    )
}