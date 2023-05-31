import React, { ChangeEvent, useState } from 'react';
import { Button, Input, TextArea, Typo } from '../../../../../../ui-kit';
import successIcon from './assets/success.svg';
import './styles.sass';

const MyComponent = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(''); 
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [dataSent, setDataSent] = useState(false);

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    if (!email) {
      document.body.classList.add('errorFormEmail');
      return;
    } else {
      document.body.classList.remove('errorFormEmail');
    }
    if (!message) {
      document.body.classList.add('errorFormMessage');
      return;
    } else {
      document.body.classList.remove('errorFormMessage');
    }

    const formData = new FormData();
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('message', message);
    console.log([...formData]);

    try {
      const response = await fetch('./send.php', {
        method: 'POST',
        body: formData,
      });
    
      if (response.ok) {
        // Request was successful (status code 2xx)
        // Handle the successful response here
        setDataSent(true);
        console.log('Request succeeded:', response);
      } else {
        // Request was not successful (status code 4xx or 5xx)
        // Handle the error response here
        console.log('Request failed:', response.status, response.statusText);
      }
    } catch (error) {
      // An error occurred during the request
      // Handle the error here
      console.log('Request error:', error);
    }
    
  };

  const onSuccessClick = () => {
    setDataSent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-us-form" id={'section-1'}>
      <Typo.H2 className="contact-us-form__title">Request a call back</Typo.H2>
      <label   className="input contact-us-form__input">
        <div>Phone Number</div>
        <input type="text" name="phone" value={phone} onChange={onPhoneChange} className="input__input"/>
      </label> 
      <label  className="input contact-us-form__input email">
        <div>Email *</div>
        <input type="text" name="email" value={email} onChange={onEmailChange} className="input__input"/>
      </label>
      
      <label   className="input contact-us-form__input">
        <div>Your Name</div>
        <input type="text" name="name" value={name} onChange={onNameChange} className="input__input"/>
      </label>
      
      <label   className="textarea contact-us-form__textarea textarea">
        <div>Message *</div>
        <textarea   name="message" value={message} onChange={onMessageChange} className="textarea__input"></textarea>
      </label>
      <button type="submit" className="button contact-us-form__button">submit request</button>
      {dataSent && (
        <div className="contact-us-form__success">
          <img src={successIcon} alt="Success" />
          <p>Thank you for your interest! We'll be following up with you shortly.</p>
          <Button
            className="contact-us-form__button"
            onClick={onSuccessClick}
          >Got it!</Button>
        </div>
      )}
    </form>
  );
};

export default MyComponent;
