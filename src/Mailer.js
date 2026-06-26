import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ij9dkff', 'template_f8g9gi9', form.current, {
        publicKey: 'ZZnM46B_alYF18no-',
      })
      .then(() => {
          alert('Message sent successfully!');
        }, (error) => {
          console.log('Failed...', error.text);
        });
  };
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      
      <label>Email</label>
      <input type="email" name="user_email" required />
      
      <label>Message</label>
      <textarea name="message" required />
      
      <input type="submit" value="Send" />
    </form>
  );
};
