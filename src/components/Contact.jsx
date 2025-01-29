import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    const serviceID = 'service_nrgq9e8'; // Your EmailJS Service ID
    const templateID = 'template_re6iw0m'; // Your EmailJS Template ID
    const publickey = 'dSh4jM31blyplA1ob'; // Your EmailJS User ID
  
    const messageData = {
      user_name: formData.name, // Match the template variable {{user_name}}
      user_email: formData.email, // Match the template variable {{user_email}}
      message: formData.message, // Match the template variable {{message}}
    };
  
    emailjs
      .send(serviceID, templateID, messageData, publickey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message. Please try again later.');
      });
  };
  
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>If you have any inquiries, feel free to reach out to us through the details below:</p>
          <ul>
            <li>
              <strong>Phone:</strong> +91 1234567899
            </li>
            <li>
              <strong>Email:</strong> travelexplorer@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Mallakpet Yadagiri
            </li>
          </ul>
        </div>
        
        <div className="contact-form-container">
          <h2>Message Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
