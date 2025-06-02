import React from "react";

function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item, index) => index !== itemToRemove);
    setCartItems(updatedCart);
  };

  return (
    <div className="web">
      <div className="main-card">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ 
                display: "flex", justifyContent: "space-between", alignItems: "center", 
                padding: "10px", marginBottom: "8px", backgroundColor: "#111", 
                border: "1px solid #555", borderRadius: "8px" 
              }}>
                <span>{item}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#ff5555",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
