import React, { useEffect } from 'react'
import image1 from '../../img/earphone1.jpg'
import image2 from '../../img/earphone2.webp'
import image3 from '../../img/earphone3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './product.css'
import headphones6 from '../../img/earphone1.jpg';
import headphones7 from '../../img/earphone2.webp';
import headphones8 from '../../img/earphone3.jpg';
import { Link } from 'react-router-dom';
const BgImages = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  },[AOS])

  const prodcut1 =  
    {
      id: 28,
      title: "Polygold B39",
      price: 299,
      image: headphones6,
      description: "سماعة Polygold B39 هي سماعة بلوتوث فوق الأذن، تعمل بتقنية Bluetooth 5.0، وتدعم كارت ذاكرة وAUX وراديو FM. تأتي بإضاءة LED جذابة، وبطارية تدوم حتى 8 ساعات، وتصميم مريح بوسائد ناعمة. مناسبة للمكالمات وتشغيل الموسيقى، وتُعد خيارًا اقتصاديًا بأداء جيد.",
      brand: 'Shenzhen ',
      category: 'headphones',
    }

    const prodcut2 =   {
          id: 29,
          title: "AirPods Max",
          price: 499,
          image: headphones7,
          description: "سماعات Apple AirPods Max هي سماعات رأس فوق الأذن تتميز بتصميم فاخر وجودة صوت استثنائية، مما يجعلها خيارًا مثاليًا لعشاق الصوتيات والتكامل العميق مع أجهزة Apple.",
          brand: 'Apple',
          category: 'headphones',
        }
    
        const product3 =  {
            id: 30,
            title: "Logitech G Pro X 2",
            price: 499,
            image: headphones8,
            description: "سماعة Logitech G Pro X 2 Lightspeed هي سماعة ألعاب احترافية لاسلكية تتميز بمحركات صوت Graphene 50mm تقدم صوتًا دقيقًا وواضحًا، مع دعم للصوت المحيطي 7.1، وميكروفون قابل للفصل بتقنية Blue VO!CE. توفر اتصالًا عبر LIGHTSPEED وBluetooth وكابل 3.5 مم، وتتميز بعمر بطارية طويل يصل إلى 50–80 ساعة، وتصميم مريح وخفيف الوزن مناسب للجلسات الطويلة.",
            brand: 'Logitech International ',
            category: 'headphones',
          }
      
  
   
  return (
     <section className='bg-images'>
      <div className="container">
       <div className="background">المنتجات الأكثر شرائاً</div>
       <div className="image" data-aos="zoom-in-down">
        <div className="col" >
        <img src={image1} alt="" />
         <Link to={`product/${prodcut1.id}`} state={{product: prodcut1}} className='btn'>شراء الان</Link>
        </div>
             <div className="col">
        <img src={image2} alt="" />
         <Link to={`product/${prodcut2.id}`} state={{product: prodcut2}} className='btn'>شراء الان</Link>
        </div>
             <div className="col">
        <img src={image3} alt="" />
         <Link to={`product/${product3.id}`} state={{product: product3}} className='btn'>شراء الان</Link>
        </div>
       </div>
      </div>
    </section>
  )
}

export default BgImages
