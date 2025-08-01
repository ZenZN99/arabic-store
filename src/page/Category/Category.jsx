import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/products/ProductCard'
import fashion from '../../Components/data/fashion';
import furniture from '../../Components/data/furniture';
import headphones from '../../Components/data/headphone';
import laptops from '../../Components/data/laptop';
import phones from '../../Components/data/phone';
import shoes from '../../Components/data/shoes';
import './category.css'

const categoryMap = {
  phones: phones,
  laptops: laptops,
  shoes: shoes,
  fashion: fashion,
  furniture: furniture,
  headphones: headphones,
}
const Category = () => {

    const {category} = useParams();

    const products = categoryMap[category] || [];
  return (
    <section className='category-page'>
        <h2>منتجات: <span>{category}</span></h2>
        <div className="container">
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))
            ): (
                <p>لا يوجد منتجات في هذه الفئة</p>
            )}
        </div>
    </section>
  )
}

export default Category
