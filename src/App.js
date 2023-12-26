import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  

  const onCheckout = () => {
    const dataToSend = {
      cartItems: cartItems,
      // Add any other relevant data you want to send
    };
    // tele.MainButton.text = "Pay :)";
    // tele.MainButton.show();
      // Optionally, you can send the selected items to the bot immediately
      tele.MainButton.setText('Pay :)').show().onClick(function () {
        const jsonData = JSON.stringify(dataToSend);
        //const data = {cartItems};
        // JSON.stringify({
        //   username: document.querySelector('input[name=username]').value,
        //   password: document.querySelector('input[name=password]').value,
        //   date_start: document.querySelector('input[name=dates]').value,
        //   date_end: document.querySelector('input[name=datee]').value,
        //   ei_type: document.getElementsByName('ei_type')[0].value,
        //   download_ei: [].filter.call(document.getElementsByName('download_ei'), (c) => c.checked).map(c => c.value)
        //  });
        Telegram.WebApp.sendData(jsonData);
        Telegram.WebApp.close();
    });
    // tele.MainButton.setText('Pay :)').show().onClick(function () {
    //   Telegram.WebApp.sendData("Simple text message");
    //   Telegram.WebApp.close();
    // });
    
  };
  

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
