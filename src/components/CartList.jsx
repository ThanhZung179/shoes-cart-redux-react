import React from 'react'
import nikeLogo from '../assets/nike.png'

function CartList() {
  return (
    <div className='card'>
      <div className='cardTop'>
        <img src={nikeLogo} />
        <div>
          Total: 1
        </div>
      </div>
      <div className='cardTitle'>
        <span>Your Cart</span>
        <span className='card_amount'>$200</span>
      </div>
      <div className='cardBody'> {/* CartItem */}

      </div>
    </div>
  )
}

export default CartList