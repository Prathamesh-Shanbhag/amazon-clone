import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://cdn.electronicfirst.com/uploads/2020/04/24102257/Amazon-Gift-Cards-Banner.jpg'
          S
          alt=''
        />

        <div className='checkout__title'>
          <h3>
            Hello,{' '}
            <strong>
              {user
                ? `${user.displayName !== null ? user.displayName : user.email}`
                : 'Guest'}
            </strong>
          </h3>
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
