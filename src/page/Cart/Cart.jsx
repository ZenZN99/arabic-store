import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Components/context/CartCotext'
import { FaTrashAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import {Link} from 'react-router-dom';
import './cart.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Cart = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    },[])

  const {cartItem , removeItem , QuantitativeIncrease , QuantitativeDecrease} = useContext(CartContext)
  console.log(cartItem);
  
  const total = cartItem.reduce((acc , item) => acc + item.price * item.quantity,0)
  return (
    <section className='cart-page' data-aos="fade-down">
        <h1><TiShoppingCart />  المنتجات المضافة الى السلة</h1>
      <div className="container">
        <div className="items">
          {cartItem.length === 0 ? (
            <p className='no-product'>لا يوجد منتجات في  سلة تسوق </p>
          ): (
            cartItem.map((items) => (
              <div className="item-cart"  key={items.id}>
                <div className="image-cart">
                  <img src={items.image} alt="img" />
                </div>
              <div className="content-cart">
                  <h3>{items.title}</h3>
                <p>${items.price}</p>
              </div>

              <div className="control">
                <button onClick={() => QuantitativeDecrease(items.id)}>-</button>
                <span>{items.quantity}</span>
                <button onClick={() => QuantitativeIncrease(items.id)}>+</button>
              </div>

              <div className="delete-item">
                <button onClick={() => removeItem(items.id)}><FaTrashAlt /></button>
              </div>
              </div>
            ))
          )}
        </div>
        
          <div className="btm-sec">
          <div className="total">
            <span>${total}</span>
          </div>
              <p>:المجموع</p>
          </div>
          {cartItem.length > 0 ?(
            <Link to="/login" className='place-order'>شراء الان</Link>
          ): (
            null
          )}
      </div>
    </section>
  )
}

export default Cart
