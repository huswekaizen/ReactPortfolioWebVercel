import React, { useState } from "react";
import Stacks from "./website/stacks";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Order({ showDiv, setShowDiv, cartItems, setCartItems }) {
    const [totalBalance, setTotalBalance] = useState(100);
    const [ufcMerchCount, setUfcMerchCount] = useState(0);
    const [figurineCount, setFigurineCount] = useState(0);


    const [ufcMerchQuantity, setUfcMerchQuantity] = useState();
    const [figurineQuantity, setFigurineQuantity] = useState();
    const [ufcMerchPrice, setUfcMerchPrice] = useState(19); 
    const figurinePrice = 8;

    const totalOrders = (ufcMerchCount * ufcMerchPrice) + (figurineCount * figurinePrice);

    function Checkout() {
        if (totalOrders > totalBalance) {
            alert("You don't have enough money");
            return;
        } else if(totalOrders == 0){
            alert("You haven't ordered anything");
        }else {
            window.alert(`You have paid ${totalOrders}$`);
            setTotalBalance(totalBalance - totalOrders);
            setUfcMerchCount(0);
            setFigurineCount(0);
        }
    }

    function MerchInput() {
        if(ufcMerchQuantity > 0){
            setUfcMerchCount(ufcMerchQuantity);
            setUfcMerchQuantity(0);
        }
    }

    function FigurineInput() {
        if(figurineQuantity > 0){
            setFigurineCount(figurineQuantity);
            setFigurineQuantity(0);
        }
    }  
    
    const navigate = useNavigate();

    
    const addToCart = (itemName) => {
        setCartItems((prev) => [...prev, itemName]);
        alert(`${itemName} added to cart!`);
    };
    

    return ( 
        <div className="web">
            <div className="main-card"> 
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h1 style={{ marginTop: "0" }}>Orders</h1>
                    <h4>Total Balance: <span style={{ color: "lightGreen" }}>{totalBalance}$</span></h4>
                    <NavLink style={{display: "flex", alignItems: "center", gap: "10px",textDecoration: "none", fontSize: "14px", color: "#d1d1d1"}} to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>Cart<FaShoppingCart /></NavLink>
                </div>
                <br />

                {/* UFC Merch */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "6px", border: "1px solid rgb(82, 82, 82)", marginRight: "12px", padding: "14px 18px", cursor: "pointer", backgroundColor: "#111111" }}>
                    <Stacks logo="react.png" text="UFC Merch" />
                    <h4>{ufcMerchPrice}$</h4>
                    <button onClick={() => setUfcMerchCount(ufcMerchCount + 1)} style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>+</button>
                    <button onClick={() => setUfcMerchCount(Math.max(0, ufcMerchCount - 1))} style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>-</button>
                    <input value={ufcMerchQuantity} onChange={(e) => setUfcMerchQuantity(e.target.value)} placeholder="Quantity" style={{color: "black"}} type="number" />
                    <button onClick={MerchInput}  style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>Add</button>
                    <button  onClick={() => addToCart("UFC Merch")} style={{display: "flex", alignItems: "center", gap: "10px", padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>Add to Cart <FaShoppingCart /></button>
                </div>
                <br />

                {/* Lookism Figurine */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "6px", border: "1px solid rgb(82, 82, 82)", marginRight: "12px", padding: "14px 18px", cursor: "pointer", backgroundColor: "#111111" }}>
                    <Stacks logo="react.png" text="Lookism Figurine" />
                    <h4>{figurinePrice}$</h4>
                    <button onClick={() => setFigurineCount(figurineCount + 1)} style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>+</button>
                    <button onClick={() => setFigurineCount(Math.max(0, figurineCount - 1))} style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>-</button>
                    <input value={figurineQuantity} placeholder="Quantity"  onChange={(e) => setFigurineQuantity(e.target.value)} style={{color: "black"}} type="number" />
                    <button onClick={FigurineInput}  style={{ padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>Add</button>
                    <button onClick={() => addToCart("Lookism Figurine")} style={{display: "flex", alignItems: "center", gap: "10px", padding: "8px 14px", backgroundColor: "#111111", border: "1px solid rgb(82, 82, 82)", borderRadius: "6px", cursor: "pointer" }}>Add to Cart <FaShoppingCart /></button>
                </div>
                <br />

                {/* Checkout Section */}
                <div style={{ display: "flex", flexDirection: "column", borderRadius: "6px", border: "1px solid rgb(82, 82, 82)", marginRight: "12px", padding: "14px 18px", cursor: "pointer", backgroundColor: "#111111" }}>
                    <h2>Total Orders Amount: {totalOrders}$</h2>
                    <button onClick={Checkout} style={{ width: "auto", alignSelf: "flex-start", backgroundColor: "lightgreen", border: "none", marginRight: "5px", padding: "8px", borderRadius: "8px", color: "black", fontWeight: "bold", cursor: "pointer" }}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Order;
