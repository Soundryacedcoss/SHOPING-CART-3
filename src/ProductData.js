import React from 'react'
import img1 from './images/football.png'
import img2 from './images/tennis.png'
import img3 from './images/basketball.png'
import img4 from './images/table-tennis.png'
import img5 from './images/soccer.png'
import { Link} from 'react-router-dom';
export const ProductData = () => {
  return (
    <div style={{marginTop:"2%"}}>
	<button className="BackToHomeButton contactDiv" ><Link to={'/'}>Home</Link></button>
     <h2 style={{textAlign:"center"}}>Available in stock</h2>
       <div id="main">
		<div id="products">
			<div id="product-101" className="product">
            <img src={img1} alt="" />
				<h3 className="title"><a href="//">Product 101</a></h3>
				<span>Price: $150.00</span>
				<button  className="add-to-cart" value="101" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
				<img src={img2} alt="" />
				<h3 className="title"><a href="//">Product 102</a></h3>
				<span>Price: $120.00</span>
				<button  className="add-to-cart" value="102" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
              <img src={img3} alt="" />
				<h3 className="title"><a href="//">Product 103</a></h3>
				<span>Price: $90.00</span>
				<button  className="add-to-cart" value="103" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
             <img src={img4} alt="" />
				<h3 className="title"><a href="//">Product 104</a></h3>
				<span>Price: $110.00</span>
				<button  className="add-to-cart" value="104" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
      <img src={img5} alt="" />
				<h3 className="title"><a href="//">Product 105</a></h3>
				<span>Price: $80.00</span>
				<button  className="add-to-cart" value="105" href="#" >Add To Cart</button>
			</div>
			
		</div>
	</div>
        </div>
  )
}
