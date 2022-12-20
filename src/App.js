import { Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import { Cart } from "./Cart";
import { ProductData } from "./ProductData";
import { Conatct } from "./Conatct";
import { Navbar } from "./Navbar";

export const DataContext = createContext();
export const themeContext = createContext();
function App() {
  const [cartArr, setCartArr] = useState([]);
  const [theme, setTheme] = useState();
  return (
    <div className="App" style={theme}>
      <DataContext.Provider value={{ cartArr, setCartArr }}>
        <themeContext.Provider value={{ theme, setTheme }}>
          <Routes>
            <Route path="/" element={<Navbar />}></Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ProductData" element={<ProductData />} />
            <Route path="/Contct" element={<Conatct />} />
          </Routes>
        </themeContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
