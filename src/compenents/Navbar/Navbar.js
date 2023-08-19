import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
    <img src="logo.svg"/>
    <span>logo</span>
      </div>
      <div className='icons'>
          <img src="/search.svg" className='icon'/>
          <img src="/app.svg" className='icon'/>
          <img src="/expand.svg" className='icon'/>
          <div className='notification'>
            <img src="/notifications.svg"/>
            <span>0</span>
          </div>
          <div className='user'>
            <img src= "https://image.lexica.art/full_jpg/c713dc5a-9461-44b7-8f70-13b0d4dd2b5a"/>
            <span>shimaa3434</span>
          </div>
          <img src="/settings.svg" className='icon'/>
      </div>
    </div>
  )
}

export default Navbar