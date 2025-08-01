import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import './navbar.css';
import Search from './Search';
import { CartContext } from '../context/CartCotext';
import logo from '../../img/icon.webp'

const Navbar = () => {
      const { cartItem , favItems } = useContext(CartContext);
    
      const location = useLocation();

    const productLinks = [
        {title: 'هواتف' , link: '/category/phones'},
        {title: 'لابتوبات' , link: '/category/laptops'},
        {title: 'سماعات' , link: '/category/headphones'},
        {title: 'اثاث' , link: '/category/furniture'},
        {title: 'ازياء' , link: '/category/fashion'},
        {title: 'احذية' , link: '/category/shoes'},
    ]

    const [menuOpen , setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    },[location])
  return (
    <nav className='navbar'>
        <div className="container">
            <Link to="/" className="logo"><img src={logo} alt="" /> متجر عربي </Link>
            
            <Search />

            <div className="nav-links">
                <Link to="/">الرئيسية</Link>
                <Link to="/about">من نحن</Link>
                <Link to="/services">خدمات</Link>
            </div>

            <div className="icons">
               <div className="icon">
                    <Link to="/cart">
                     <TiShoppingCart />
                    </Link>
                <span className="count">{cartItem.length}</span>
               </div>
               <div className="icon">
                 <Link to="/favorite">
                 <FaRegHeart />
                 </Link>
                <span className="count">{favItems.length}</span>
               </div>
            </div>

            <div className={`menu-products ${menuOpen ? 'active' : ''}`}>
                <AiOutlineMenu className='pointer' onClick={() => setMenuOpen(!menuOpen)}/>
                <div className="nav-list">
                    <ul>
                        {productLinks.map((item , i) => (
                            <li key={i}><Link to={item.link}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
