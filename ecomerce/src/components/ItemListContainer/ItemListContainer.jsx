import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      // Filtrar productos por categoría
      getProductsByCategory(categoryId).then((filteredProducts) => {
        setProducts(filteredProducts);
      });
    } else {
      // Obtener todos los productos si no hay categoría seleccionada
      getProducts().then((allProducts) => {
        setProducts(allProducts);
      });
    }
  }, [categoryId]);

  return (
    <div>
      <h2 style={{ color: "red" }}>{greeting}</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>{product.description}</p>
            <p style={{ margin: "5px 0", fontSize: "16px", fontWeight: "bold" }}>
              Precio: ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}





