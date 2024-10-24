import React, { useState } from 'react'
import './Contact.css'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكراً لتواصلك، ${formData.name}! سنتواصل معك قريباً.`);
};

  return (
    <form onSubmit={handleSubmit} className="contact-form">
    <h2 className="form-title">تواصل معنا</h2>
    <div className="form-group">
        <label htmlFor="name">الاسم</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
        />
    </div>
    <div className="form-group">
        <label htmlFor="email">البريد الإلكتروني</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
        />
    </div>
    <div className="form-group">
        <label htmlFor="message">الرسالة</label>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            required
        ></textarea>
    </div>
    <button type="submit" className="form-button">إرسال</button>
</form>
  )
}
