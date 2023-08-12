import { useState } from 'react';
import React from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className='container mt-5 sectionContact'>
      <h2 className='mb-3 section-title'>GymRatz Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label' htmlFor='name'>
            Name
          </label>
          <div className='col-sm-10'>
            <input className='form-control' type='text' id='name' required />
          </div>
        </div>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label' htmlFor='email'>
            Email
          </label>
          <div className='col-sm-10'>
            <input className='form-control' type='email' id='email' required />
          </div>
        </div>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label' htmlFor='message'>
            Message
          </label>
          <div className='col-sm-10'>
            <textarea className='form-control' id='message' required />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-10 offset-sm-2'>
            <button className='btn btn-danger' type='submit'>
              {formStatus}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

