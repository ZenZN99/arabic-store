import React, { useEffect } from "react";
import "./services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUsers , FaMoneyBillTrendUp } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
      useEffect(() => {
        Aos.init({
          duration: 2000,
          once: false,
        });
      }, []);
  return (
    <section className="services" data-aos="fade-up">
      <h2>الخدمات</h2>
      <div className="container">
        <div className="cards">
          <div className="card">
            <h3><TbTruckDelivery /> توصيل مجاني</h3>
            <p>
              توصيل مجاني لجميع طلباتك أينما كنت! استمتع بخدمة شحن سريعة وآمنة
              دون أي رسوم إضافية، مع تغليف أنيق وتسليم حتى باب منزلك. راحتك
              أولويتنا، والتوصيل علينا!
            </p>
          </div>
          <div className="card">
            <h3><BsCartCheckFill /> تسوق بأمان</h3>
            <p>
              تسوق آمن 100% عبر متجرنا! نضمن لك حماية كاملة لمعلوماتك وبيانات
              الدفع من خلال أنظمة تشفير حديثة ومعايير أمان عالية. تسوق بثقة
              واطمئنان، فنحن نضع خصوصيتك وسلامتك الرقمية في أعلى أولوياتنا.
            </p>
          </div>
          <div className="card">
            <h3><FaUsers /> عملاء</h3>
            <p>
              عملاؤنا هم محور اهتمامنا وأساس نجاحنا. نحرص دائمًا على تقديم أفضل
              تجربة تسوق ممكنة من خلال خدمة عملاء متجاوبة، دعم سريع، وجودة عالية
              في المنتجات. رضاك هو هدفنا، وثقتك هي ما يدفعنا للاستمرار والتطور.
            </p>
          </div>
          <div className="card">
            <h3><FaMoneyBillTrendUp />ضمان اموالك</h3>
            <p>
              إذا لم يعجبك المنتج، لا تقلق! نوفر لك سياسة إرجاع مرنة تتيح لك
              إعادة المنتج خلال 30 يومًا من تاريخ الاستلام، بكل سهولة وبدون
              تعقيد. راحتك ورضاك هما أولويتنا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
