import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ( { footerBanner: { desc, discount, smallText, largeText1, largeText2, saleTime, midText, product, buttonText, image} } ) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <h3>{midText}</h3>
          <Link href={`/product/${product}`}>
            <button
              type='button'
            >
              {buttonText}
            </button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} 
          alt="Headphones" 
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner
