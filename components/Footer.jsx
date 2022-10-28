import React from 'react';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> 2022 Forstore SV All rights reserved</p>
      <p className='icons'>
        <a href="https://www.instagram.com/forstoresv/" target='_blank'> <AiFillInstagram /> </a>
        <a href="https://www.facebook.com/Forstoresv" target='_blank'> <AiOutlineFacebook /> </a>
      </p>
    </div>
  )
}

export default Footer
