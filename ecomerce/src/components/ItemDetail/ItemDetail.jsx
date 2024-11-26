export default function ItemDetail({ name, img, description, price }) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img
          src={img}
          alt={name}
          style={{
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <h2 style={{ margin: "20px 0" }}>{name}</h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
          {description}
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Precio: ${price}
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => alert("Producto agregado al carrito")}
        >
          Agregar al carrito
        </button>
      </div>
    );
  }
  
  