import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <i className="bi bi-cart-fill" style={{ fontSize: "24px", color: "#000" }}></i>
      {totalItems > 0 && (
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "4px 8px",
            borderRadius: "12px",
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}


