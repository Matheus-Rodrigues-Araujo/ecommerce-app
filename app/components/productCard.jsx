export default function ProductCard({item}){
    return (
        <li key={item.id} className="product-card" >
            <div className="product" >
                <img className="product-image" src={item.photo} alt="item photo"/>
                <div className="product-information" >
                <div className="info-1" >
                    <p className="product-name" >{item.name}</p>
                    <div className="product-price flex justify-center items-center" >
                    <p>{item.price}</p>
                    </div>
                </div>
                {/* <div className="info-2" > */}
                    <p className="description" >{item.description}</p>
                {/* </div> */}
                </div>
            </div>
            <button className="buy-btn flex" >
                
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="shopping-bag">
                <path id="Path" opacity="0.737212" fill-rule="evenodd" clip-rule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Path_2" opacity="0.737212" d="M1 4.375H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Path_3" opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                Comprar
            </button>
        </li>
    )
}