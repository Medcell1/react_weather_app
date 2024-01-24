import React, { } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { NavbarItem } from './navbaritems'
import { NAV_BAR_ITEMS } from '../constants/nav_constants'
import { useNavBarContext } from '../context/navbarcontext'

export const Navbar = () => {
    const { selectedId, selectItem } = useNavBarContext();

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <div className='navbar'>
            {NAV_BAR_ITEMS.map((item) => <Link onClick={() => selectItem(item.id)} id={item.id} style={linkStyle} to={item.url} > <NavbarItem name={item.label} icon={item.icon} active={selectedId === item.id}></NavbarItem></Link>)}
        </div>
    )
}
