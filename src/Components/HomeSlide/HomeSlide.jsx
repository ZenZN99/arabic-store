import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from "../../img/banner1.webp";
import image2 from "../../img/banner2.jpg";
import image3 from "../../img/banner3.png";
import image4 from "../../img/banner4.jpg";
import image5 from "../../img/banner5.png";
import laptops1 from "../../img/laptops1.jpeg";
import shoes6 from "../../img/shoes6.jpg";
import phone3 from "../../img/phone3.webp";
import headphones2 from "../../img/headphones2.webp";
import "./homeslide.css";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeSlide = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const product1 = {
    id: 9,
    title: "Apple MacBook Pro M4",
    price: 1499,
    image: laptops1,
    description:
      "Apple MacBook Pro M4: لابتوب قوي مصمم للمحترفين، مزود بشريحة M4 المتطورة بمعالج يصل إلى 16 نواة، شاشة Liquid Retina XDR بحجم 14 أو 16 إنش مع معدل تحديث 120Hz وتقنية Mini-LED، ذاكرة موحدة تصل إلى 96 جيجابايت وتخزين SSD فائق السرعة حتى 8 تيرابايت، مع بطارية تدوم لفترة طويلة، ومجموعة منافذ متنوعة، نظام macOS 14 لأداء سلس وتجربة احترافية متكاملة.",
    brand: "Apple",
    category: "laptops",
  };

  const product2 = {
    id: 22,
    title: "Nike Red Running Shoes",
    price: 399,
    image: shoes6,
    description:
      "حذاء نايكي جري أحمر هو حذاء رياضي مخصص للجري يتميز بتصميم جذاب وعصري باللون الأحمر الزاهي. يأتي بوزن خفيف ومواد تنفسية تسمح بمرور الهواء للحفاظ على قدميك جافتين ومريحتين أثناء الجري. يوفر دعمًا ممتازًا للكاحل والقدم بفضل تقنية التبطين والنعل المرن الذي يمتص الصدمات لتقليل التعب وتحسين الأداء. نعل الحذاء مزود بتصميم يوفر ثباتًا وقبضة قوية على مختلف الأسطح، مما يجعله مثاليًا للجري في الهواء الطلق أو على المضمار.",
    brand: "Nike",
    category: "shoes",
  };

  const product3 = {
    id: 3,
    title: "iPhone 16 plus",
    price: 1099,
    image: phone3,
    description:
      "iPhone 16 Plus: شاشة Super Retina XDR بحجم 6.7 إنش بدقة عالية، شريحة A18 قوية توفر أداء سريع وكفاءة في استهلاك الطاقة، كاميرا مزدوجة 48MP مع تصوير فيديو احترافي، بطارية تدوم طوال اليوم، وتصميم أنيق وخفيف الوزن يناسب الاستخدام اليومي بسهولة.",
    brand: "Apple",
    category: "phones",
  };

  const product4 = {
    id: 24,
    title: "AirPods Pro Max",
    price: 399,
    image: headphones2,
    description:
      "سماعات Apple AirPods Max هي سماعات رأس فوق الأذن تتميز بتصميم فاخر وجودة صوت استثنائية، مما يجعلها خيارًا مثاليًا لعشاق الصوتيات والتكامل العميق مع أجهزة Apple.",
    brand: "Apple",
    category: "headphones",
  };
  return (
    <section className="home-slide" data-aos="fade-up">
      <Swiper
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <h4>الكترونيات حديثة</h4>
            <h3>Macbook pro</h3>
            <p>خصم يصل حتى %5</p>
            <Link to={`product/${product1.id}`}state={{ product: product1 }} ><button className="btn"> اشتري الان</button></Link>
          </div>
          <img src={image1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4>احذية انيقة</h4>
            <h3>Nike Shoes</h3>
            <p>خصم يصل حتى %5</p>
            <Link
              to={`product/${product2.id}`}
              state={{ product: product2 }}
            >
              <button className="btn">اشتري الان</button>
            </Link>
          </div>
          <img src={image2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4>هواتف رائدة</h4>
            <h3>iPhone 16 plus</h3>
            <p>خصم يصل حتى %5</p>
            <Link
              to={`product/${product3.id}`}
              state={{ product: product3 }}
            >
            <button className="btn">  اشتري الان</button>
            </Link>
          </div>
          <img src={image3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4>سماعات احترافية</h4>
            <h3>AirPods Max 2</h3>
            <p>خصم يصل حتى %5</p>
            <Link
              to={`product/${product4.id}`}
              state={{ product: product4 }}
            >
            <button className="btn">  اشتري الان</button>
            </Link>
          </div>
          <img src={image4} alt="img" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlide;
