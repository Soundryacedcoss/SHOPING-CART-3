import React, {useContext, useState } from 'react'
import img1 from './images/football.png'
import img2 from './images/tennis.png'
import img3 from './images/basketball.png'
import img4 from './images/table-tennis.png'
import img5 from './images/soccer.png'
import DarkMode from './images/dark-mode.png'
import { Link} from 'react-router-dom';
import products from './data';
import { DataContext } from './App'
import { Footer } from './Footer'
export const Product = () => {
	// using context 
	const data=useContext(DataContext)
	// add to cart button functinality
    const AddToCart=(event)=>{
        for (let i = 0; i < products.length; i++) {
			if (event.target.value===products[i].id) {
			    if (products[i].quantity<1) {
					alert("Product added to cart")
					products[i].quantity+=1
					data.cartArr.push(products[i])
					data.setCartArr([...data.cartArr])
				}
				else if(products[i].quantity>=1){
					alert("Product added to cart")
					products[i].quantity+=1
					data.setCartArr([...data.cartArr])
				}
			}
		}	
    }
const[theme,setTheme]=useState() 
const [isClick,setIsClick]=useState(true)
const TheameIcon=()=>{
	if(isClick===true){
		setTheme({backgroundColor:"#242424c9"})
		setIsClick(false)
	}
	else{
		setTheme()
		setIsClick(true)
	}
	}
  return (
	<div className='ProductPage' style={theme}>
    <div >
		<div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/ProductData'}>Products</Link></li>
				<li><Link to={'/Contct'}>Contact</Link></li>
                <li><Link to={'/Cart'}>🛒Cart{data.cartArr.length}</Link></li>
				<li><img onClick={TheameIcon} value={isClick} className='DarkMode' src={DarkMode} alt="" /></li>
			</ul>
			
		</nav>
	</div>
	</div>
       <div id="main">
		<div id="products">
			<div id="product-101" className="product">
            <img src={img1} alt="" />
				<h3 className="title"><a href="//">Product 101</a></h3>
				<span>Price: $150.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="101" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
				<img src={img2} alt="" />
				<h3 className="title"><a href="//">Product 102</a></h3>
				<span>Price: $120.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="102" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
              <img src={img3} alt="" />
				<h3 className="title"><a href="//">Product 103</a></h3>
				<span>Price: $90.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="103" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
             <img src={img4} alt="" />
				<h3 className="title"><a href="//">Product 104</a></h3>
				<span>Price: $110.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="104" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
      <img src={img5} alt="" />
				<h3 className="title"><a href="//">Product 105</a></h3>
				<span>Price: $80.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="105" href="#" >Add To Cart</button>
			</div>
			
		</div>
	</div>
    </div>
	<Footer/>
	</div>
  )
}
