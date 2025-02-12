import React, { useState } from 'react'
import './Navbar.css'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#gpt3'>What is GPT3</a></p>
  <p><a href='#possibility'>OpenAI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>

  </>
)
const Navbar = () => {
  const [toggle, setToggle] = useState (false)


  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>

        <img src={logo} alt='logo' />


        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>


        </div>

      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>

      </div>
      {/* for mobile interface */}
      <div className='gpt3__navbar-menu'>
        {toggle ? <RiCloseLine color='#fff' size={26} onClick={() => setToggle(false)} />
        : <RiMenu3Line color='#fff' size={26} onClick={() => setToggle(true)}/>}

        {toggle && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3_navbar-menu_container_links'>
              <Menu/>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        )}
      </div>

      
    </div>
  )
}

export default Navbar
