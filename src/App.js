import "./App.css";
import BakeryItem from "./components/BakeryItem.js"
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([])
  const [itemMap, setItemMap] = useState({});

  const addToCart = (item) =>{
   setCart([...cart, item]);

   setItemMap((prevMap) => ({
    ...prevMap,
    [item.name]: (prevMap[item.name] || 0) + 1,
  }));
  }

  const totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price,
    0
   );

  return (
    <div className="App">
      <h1>Blueno's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="main-page">
        <div className="all-cards">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            addToCart={()=> addToCart(item)}
            >
            </BakeryItem>
          ))}
        </div>

        <div className="cart">
          <h2>My Cart</h2>
          
            {Object.keys(itemMap).map((itemName, index) => (
              <p key={index}>
                {itemMap[itemName]} x {itemName}
              </p>
            ))}
         
          <p> Total: $ {totalPrice.toFixed(2)}</p>
        </div>
      </div>


    </div>
  );
}

export default App;
