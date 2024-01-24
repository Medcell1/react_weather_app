import React from 'react'
import './navbar.css'


export const NavbarItem = (props) => {
  return (
        
        <div className='navbaritem'>
            <div className='icon' style={{ color: props.active ? 'white' : 'gray' }}> {props.icon}</div>
       
        <p className='weatherText' style={{ color: props.active ? 'white' : 'gray' }}>{props.name}</p>
        </div>
   
  )
}
