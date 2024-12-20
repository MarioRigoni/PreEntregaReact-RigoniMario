import React from "react";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>El carrito está vacío</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tu Carrito</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${parseFloat(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm("¿Estás seguro de que deseas quitar este producto?")) {
                  removeFromCart(item.id);
                }
              }}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total de productos: {totalItems}</h3>
      <h3>Total a pagar: ${parseFloat(totalPrice).toFixed(2)}</h3>
      <button
        onClick={() => {
          if (window.confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
            clearCart();
          }
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Vaciar Carrito
      </button>
    </div>
  );
}


