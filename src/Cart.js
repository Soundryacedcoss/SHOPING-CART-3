import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./App";
import { Navigate } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
export const Cart = () => {
  const [Price, setPrice] = useState();
  const [Emptymsg, setEmptyMsg] = useState({ display: "none" });
  const [Display, setDisplay] = useState();
  // storing value from context
  const productData = useContext(DataContext);
  // increase Button Functionaliy
  const IncreaseHandler = (val) => {
    console.log("hii");
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        productData.cartArr[i].quantity += 1;
        productData.setCartArr([...productData.cartArr]);
      }
    }
  };
  // decrese button functinality
  const DecreseHandler = (val) => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        if (productData.cartArr[i].quantity <= 1) {
          alert("Warning ! your product will delete from cart");
          productData.cartArr.splice(i, 1);
          productData.setCartArr([...productData.cartArr]);
        } else {
          productData.cartArr[i].quantity -= 1;
          productData.setCartArr([...productData.cartArr]);
        }
      }
    }
  };
  // Adding Price here
  let totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      totalprice +=
        productData.cartArr[i].quantity * productData.cartArr[i].price;
      console.log(
        productData.cartArr[i].quantity * productData.cartArr[i].price
      );
      setPrice(totalprice);
      console.log(Price);
      <Navigate to="/"></Navigate>;
    }
    if (productData.cartArr.length === 0) {
      setDisplay({ display: "none" });
      setEmptyMsg({ display: "block" });
    }
  }, [productData.cartArr]);
  // Buy Button function
  const BuyButtonHandler = (e) => {
    if ((e.target.value = true)) {
      alert("Thank you for Shopping😊");
    }
  };
  // Here i am deleting all item from cart
  function EmptyButtonHandler() {
    alert("all item will be deleted");
    window.location.reload(false);
    setDisplay();
  }
  return (
    <div className="ProductPage">
      <div className="CartPageDiv">
        <center className="CartNavbar">
          <button className="BackToHomeButton">
            <Link to={"/"}>Home</Link>
          </button>
          <p className="EmptyCartPara" style={Emptymsg}>
            Your CART is empty
          </p>
          <div style={Display} className="cartDiv ">
            {productData.cartArr.map((item) => (
              <div className="flex">
                <div>
                  <img className="CartImgDiv" src={item.image} alt="" />
                </div>{" "}
                <div className="ProductNameDiv">
                  {" "}
                  <p>{item.name}</p> <p>{item.price}</p>
                </div>{" "}
                <div>
                  <button
                    className="button"
                    onClick={() => IncreaseHandler(item.id)}
                  >
                    +
                  </button>
                  <b>{item.quantity}</b>
                  <button
                    className="button"
                    onClick={() => DecreseHandler(item.id)}
                  >
                    -
                  </button>{" "}
                </div>
              </div>
            ))}
          </div>
          <p style={Display} className="TotalPrice">
            Total: {Price}
          </p>{" "}
          <br />
          <br />
          <div style={Display}>
            <button onClick={BuyButtonHandler} className="Button1">
              Buy Now
            </button>
            <button className="Button1" onClick={EmptyButtonHandler}>
              Empty Cart
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};
