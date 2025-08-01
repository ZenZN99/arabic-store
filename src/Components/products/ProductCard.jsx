import React, { useContext } from "react";
import { FaStarHalfAlt , FaCartArrowDown , FaRegHeart  } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from "../context/CartCotext";
import toast from 'react-hot-toast'
const ProductCard = ({product}) => {

  const {addToCart , cartItem , addToFav , favItems  , removeItemFav} = useContext(CartContext);
  const navigate = useNavigate();
 const isInCart = cartItem.some(i => i.id === product.id);
 const isInFav = favItems.some(i => i.id === product.id)

  const handleAddToFav = () => {
   if(isInFav){
    removeItemFav(product.id)
    toast.error(`${product.title} تم حذف من المفضلة`)
   }else{
     addToFav(product)
    toast.success(`${product.title} تم اضافة الى المفضلة`)
   }
  }



 const handleAddToCart = () => {
  addToCart(product)
 toast.success(
  <div className="toast-parent">
    <div className="image-toast">
      <img src={product.image} alt="img" />
    </div>
    <div className="text-toast">
      <strong>{product.title}</strong>
      <p>تم اضافة الى سلة</p>
    </div>
    <button className="btn" onClick={() => navigate('/cart')}>اطلع على سلة تسوق</button>
  </div>,
  {duration: 3500}
 )
 }
  
  return (
    <section className="parent" data-aos="flip-left">
      <Link to={`/product/${product.id}`} state={{product}}>
      <img src={product.image} alt="img" />
      <h3>{product.title}</h3>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price">${product.price}</p>
    </Link>
      <div className="icons">
       
       <span id="cart"  className={`${isInCart ? 'active' : ''}`} onClick={handleAddToCart}><FaCartArrowDown  /></span>
       <span id="favorite" className={`${isInFav ? 'active' : ''}`} onClick={handleAddToFav}><FaRegHeart  /></span>
      </div>
    </section>
  );
};

export default ProductCard;
