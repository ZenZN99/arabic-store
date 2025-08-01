import React, { useContext } from 'react'
import { CartContext } from '../../Components/context/CartCotext'
import ProductCard from '../../Components/products/ProductCard';
import './fav.css';
import { FaRegHeart  } from "react-icons/fa"
const Fav = () => {

    const {favItems} = useContext(CartContext);
  return (
    <section className='favorite'>
        <h2><span className='icon-favorite'><FaRegHeart /></span>المنتجات المفضلة</h2>
        <div className="container">
         
         <div className="favorite-product">
            {favItems.length === 0 ?(
                <p className='no-fav'>...لا يوجد منتجات مفضلة حتى الان</p>
            ): (
                favItems.map((item) => (
                    <ProductCard key={item.id} product={item}/>
                ))
            )}
         </div>
        </div>
    </section>
  )
}

export default Fav
