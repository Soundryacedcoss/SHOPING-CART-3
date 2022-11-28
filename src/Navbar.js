import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './App';
import DarkMode from './images/dark-mode.png'
export const Navbar = () => {
  const value1=useContext(DataContext)
      console.log(value1);
      const[theme,setTheme]=useState()
      const TheameIcon=()=>{
        setTheme({backgroundColor:"gray"})
      }
  return (
    <>
   <div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/ProductData'}>Products</Link></li>
				<li><Link to={'/Contct'}>Contact</Link></li>
                <li><Link to={'/Cart'}>🛒Cart{value1.cartArr.length}</Link></li>
				<li><img onClick={TheameIcon} className='DarkMode' src={DarkMode} alt="" /></li>
			</ul>
			
		</nav>
	</div>
	</div>
    </>
  )
}
