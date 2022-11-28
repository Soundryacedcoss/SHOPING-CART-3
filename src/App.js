import { Route, Routes } from 'react-router-dom';
import React, { createContext, useState } from 'react'
import './App.css';
import DarkMode from './images/dark-mode.png'
import { Cart } from './Cart';
import { Product } from './Product';
import { ProductData } from './ProductData';
import { Conatct } from './Conatct';

export const DataContext=createContext()
function App() {
	const[cartArr,setCartArr]=useState([])
  return (
  <div className="App">
   <DataContext.Provider value={{cartArr,setCartArr}}>
	<Routes> 
	<Route path='/' element={<Product/>}/>
	<Route path='/Cart' element={<Cart/>}/>
  <Route path='/ProductData' element={<ProductData/>}/>
  <Route path='/Contct' element={<Conatct/>}/>
	</Routes>
	</DataContext.Provider>
    </div>
  );
}

export default App;
