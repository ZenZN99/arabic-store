import React, { useEffect } from "react";
import icon from "../../img/icon.webp";
import "./about.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  const navigate = useNavigate();
  return (
    <section className="about">
      <div className="container">
        <div className="image-about" data-aos="fade-right">
          <h2>
            <img src={icon} alt="img" />
            متجر عربي
          </h2>
        </div>
        <div className="content-about" data-aos="fade-left">
          <h3> من نحن في متجرنا الإلكتروني </h3>
          <p>
            نقدم لك تجربة تسوق فريدة تجمع بين الجودة، الأناقة، والأسعار
            المناسبة. نحن متجر عربي نهدف إلى تلبية احتياجاتك اليومية بكل سهولة
            وأمان من خلال منصة موثوقة وسهلة الاستخدام. منذ انطلاقنا، كان هدفنا
            هو تقديم منتجات مختارة بعناية، وخدمة عملاء راقية، وتجربة تسوق تلبي
            تطلعات المستخدم العربي. نؤمن أن التسوق يجب أن يكون ممتعًا وبسيطًا،
            ولهذا نحرص على تحديث مجموعاتنا باستمرار، ومتابعة أحدث الاتجاهات،
            وتوفير خيارات متنوعة تناسب جميع الأذواق. سواء كنت تبحث عن
            إلكترونيات، أزياء، مستلزمات منزلية، أو غيرها – نحن هنا لنقدم لك
            الأفضل.
          </p>
          <button className="btn" onClick={() => navigate("/")}>
            تسوق الأن
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
