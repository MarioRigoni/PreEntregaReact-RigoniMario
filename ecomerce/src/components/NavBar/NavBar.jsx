import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; 

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "24px",
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        Tienda RM
      </Link>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/category/hardware" style={{ textDecoration: "none" }}>
          Hardware
        </Link>
        <Link to="/category/peripherals" style={{ textDecoration: "none" }}>
          Periféricos
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartWidget itemCount={2} /> {/* Ejemplo con 2 items */}
        </Link>
      </div>
    </nav>
  );
}

