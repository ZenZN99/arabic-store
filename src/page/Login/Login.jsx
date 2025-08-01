import React, { useState } from 'react';
import './login.css';
import toast from 'react-hot-toast';
import money from '../../img/money.png'
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    location:'',
    street:'',
    receive: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(<h2>تم الشراء بنجاح</h2>, { duration: 3500 });

    // تصفير الحقول بعد الشراء
    setFormData({
      username: '',
      email: '',
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      location: '',
    street:'',
    receive: '',
    });
  };

  return (
    <section className='login-page'>
      <h2>سجل دخولك</h2>
      <div className="container">
        <form onSubmit={handleSubmit} className="login-box">
          <label>اسم المستخدم:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete='off'
            required
          />
          <label>البريد الإلكتروني:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete='off'
            required
          />
          <label>اسم صاحب البطاقة:</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            autoComplete='off'
            onChange={handleChange}
          />
          <label>رقم البطاقة:</label>
          <input
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            autoComplete='off'
            onChange={handleChange}
          />
          <label>تاريخ الانتهاء:</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            autoComplete='off'
            onChange={handleChange}
          />
          <label>رمز الأمان:</label>
          <input
            type="password"
            name="cvv"
            placeholder="CCV"
            value={formData.cvv}
            autoComplete='off'
            onChange={handleChange}
          />
          <label>المنطقة/العنوان</label>
          <input 
          type="text"
         name="location"
         value={formData.location}
         autoComplete='off'
         onChange={handleChange}
          />
          <label>اسم الشارع</label>
          <input 
          type="text"
          name='street' 
          value={formData.street}
          autoComplete='off'
         onChange={handleChange}
          />
           <label>مكان الأستلام</label>
          <input 
          type="text"
          name='receive' 
          value={formData.receive}
          autoComplete='off'
         onChange={handleChange}
          />
          <p>شحن سيصلك في غضون ثلاث ايام</p>
          <button type="submit">شراء الآن</button>
        </form>
            <img src={money} alt="" />
      </div>
    </section>
  );
};

export default Login;