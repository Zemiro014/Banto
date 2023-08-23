import React from 'react'
import Logo from '../../img/footer-logo.png'
import './style.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-logo'>
          <img src={Logo} alt=''/>
          <p>Copy right Banto tech</p>
        </div>
      </div>
      <div className='footer-bottom'>

      </div>
    </div>
  )
}

export default Footer