import React, {ChangeEvent, FC, useState} from 'react';
import { Button, Input, TextArea, Typo } from '../../../../../../ui-kit';
import successIcon from './assets/success.svg';
import './styles.sass';

const ContactUsForm: FC = () => {
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

  

  const onSubmit = async () => {
    // if (!message || !email) {
    //   document.body.classList.add('errorForm');
    //   return;
    // }  
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

    
 

    const response = await fetch('/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        phone,
        email,
        name,
        message,
      }),
    });

    // TODO -- if you need to parse JSON response
    // const data = await response.json();

    console.log(response);

    setDataSent(true);
  };
  

  const onSuccessClick = () => {
    setDataSent(false);
  };

  return (
    <section className="contact-us-form">
      <Typo.H2 className="contact-us-form__title">Request a call back</Typo.H2>
      <Input
        label="Phone Number"
        className="contact-us-form__input"
        onChange={onPhoneChange}
      />
      <Input
        label="Email *"
        className="contact-us-form__input email"
        onChange={onEmailChange}
      />
      <Input
        label="Your Name"
        className="contact-us-form__input"
        onChange={onNameChange}
      />
      <TextArea
        label="Message *"
        className="contact-us-form__textarea textarea"
        onChange={onMessageChange}
      />
      <Button
        className="contact-us-form__button"
        onClick={onSubmit}
      >submit request</Button>
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
    </section>
  );
};

export default ContactUsForm;
