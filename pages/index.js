import React from 'react'

import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components/index'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Accesories out of this world</p>
      </div>

      <div className='products-container'>
       {['Product 1', 'Product 2' ].map( (product) => (
        product
       ))}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  
}

export default Home;
