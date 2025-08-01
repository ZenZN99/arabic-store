import { useLocation, useNavigate } from 'react-router-dom'
import { FaStarHalfAlt , FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import './details.css';
import { CartContext } from '../../Components/context/CartCotext';
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'
const ProductDetails = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,
        });
      },[])
    const navigate = useNavigate();
    const location = useLocation();
  const {addToCart , cartItem ,favItems , addToFav  , removeItemFav} = useContext(CartContext);
    const product  = location.state?.product 
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

   if(!product){
        return <h2>Fail Product</h2>
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
    <button className="btn" onClick={() => navigate('/cart')}>اطلع على سلة تسق</button>
    </div>
  </div>,
  {duration: 3500}
 )
 }


  
  return (
    <section className='details' dir='rtl'>
      <div className="container">
        <div className="content" data-aos="fade-left">
            <h3 className='name-detials'>{product.title}</h3>
            <div className="stars">
             <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
            <p className='price-detials'>${product.price}</p>
            <p className='desc'>{product.description}</p>
            <h3 className='avability'>حالة المنتج: <span>متوفر</span></h3>
            <h3 className='brand'>الشركة: <span>{product.brand}</span></h3>
        <button className={`btn ${isInCart ? 'active' : ''}`} onClick={handleAddToCart}>{`${isInCart ? ' تم الاضافة الى السلة' : 'اضف الى سلة'}`} <FaCartArrowDown /></button>
        <span onClick={handleAddToFav} className={`fav-detials ${isInFav ? 'active' : ''}`}><FaRegHeart /></span>
        </div>
             <div className="image" data-aos="fade-right">
            <img src={product.image} alt="" />
        </div>
      </div>
  
    </section>
  )
}

export default ProductDetails
