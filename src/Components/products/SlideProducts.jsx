import React from 'react'
import ProductCard from './ProductCard';
import SlideGroup from './SlideGroub'
import phones from '../data/phone';
import laptops from '../data/laptop';
import shoes from '../data/shoes';
import headphones from '../data/headphone'
import fashion from '../data/fashion';
import furniture from '../data/furniture';
const Slideproducts = () => {

  return (
    <section className='slide-products'>
      <div className="container">
<SlideGroup title="هواتف" data={phones} Component={ProductCard} />
<SlideGroup title="لابتوبات" data={laptops} Component={ProductCard} />
<SlideGroup title="احذية" data={shoes} Component={ProductCard} />
<SlideGroup title="سماعات" data={headphones} Component={ProductCard} />
<SlideGroup title="ازياء" data={fashion} Component={ProductCard} />
<SlideGroup title="اثاث" data={furniture} Component={ProductCard} />
      </div>
    </section>
  )
}

export default Slideproducts
