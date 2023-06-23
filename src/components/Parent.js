// import React, { useState } from "react";

// const Parent = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [itemName, setItemName] = useState("");
//   const [itemPrice, setItemPrice] = useState("");

//   const handleAddItem = () => {
//     if (itemName && itemPrice) {
//       const newItem = {
//         id: Math.random().toString(36).substr(2, 9),
//         name: itemName,
//         price: itemPrice
//       };

//       setCartItems(prevCartItems => [...prevCartItems, newItem]);
//       setItemName("");
//       setItemPrice("");
//     }
//   };

//   const handleRemoveItem = (itemId) => {
//     setCartItems(prevCartItems =>
//       prevCartItems.filter(item => item.id !== itemId)
//     );
//   };

//   return (
//     <div className="parent">
//         <h1>Parent Component</h1>
//       <div>
//         <label> Item Name:
//         <input
//           type="text"
//           placeholder="Item Name"
//           id="itemName"
//           value={itemName}
//           onChange={(e) => setItemName(e.target.value)}
//         />
//         </label>
        
//         <label> Item Price:
//         <input
//           type="number"
//           placeholder="Item Price"
//           id="itemPrice"
//           value={itemPrice}
//           onChange={(e) => setItemPrice(e.target.value)}
//         />
//         </label>
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//       <Child cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
//     </div>
//   );
// };

// const Child = ({ cartItems, handleRemoveItem }) => {
//   return (
//     <div className="child">
//         <h2>Child Component</h2>
//       {cartItems.map(item => (
//         <div key={item.id} className="item">
//             <ul>
//                 <li>
//                 <span id="itemName">{item.name}-</span>
//                 <span id="itemPrice">${item.price}</span>
//                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                 </li>
//             </ul>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Parent;

import React, { useState } from "react";

const Parent = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
    { id: 4, name: "Item 4", price: 40 }
  ]);

     const [itemName, setItemName] = useState("");
   const [itemPrice, setItemPrice] = useState("");

   const handleAddItem = () => {
     if (itemName && itemPrice) {
       const newItem = {
         id: Math.random().toString(36).substr(2, 9),
         name: itemName,
         price: itemPrice
       };

       setCartItems(prevCartItems => [...prevCartItems, newItem]);
       setItemName("");
       setItemPrice("");
     }
   };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== itemId)
    );
  };

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <div>
         <label> Item Name:
         <input
           type="text"
           placeholder="Item Name"
           id="itemName"
           value={itemName}
           onChange={(e) => setItemName(e.target.value)}
         />
         </label>
        
         <label> Item Price:
         <input
           type="number"
           placeholder="Item Price"
           id="itemPrice"
           value={itemPrice}
           onChange={(e) => setItemPrice(e.target.value)}
         />
         </label>
         <button onClick={handleAddItem}>Add Item</button>
       </div>
      <Child cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
    </div>
  );
};

const Child = ({ cartItems, handleRemoveItem }) => {
  return (
    <div className="child">
        <h2>Child Component</h2>
      {cartItems.map(item => (
        <div key={item.id} className="item">
          <ul>
            <li>
            <span id="itemName">{item.name}-</span>
          <span id="itemPrice">${item.price}</span>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Parent;
