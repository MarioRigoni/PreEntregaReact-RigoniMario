import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";

export default function ItemDetailContainer() {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(parseInt(id)) // Obtiene el producto según el ID
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]);

  if (!product) {
    return <h2>Cargando producto...</h2>; // Mensaje mientras se carga
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <div style={{ textAlign: "center" }}>
        <img src={product.img} alt={product.name} style={{ width: "300px" }} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
      </div>
    </div>
  );
}


