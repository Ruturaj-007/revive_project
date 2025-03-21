import React from 'react'
import { AiFillInstagram, AiOutlineShopping, AiOutlineTwitter}
from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2025 Swift Mart All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer