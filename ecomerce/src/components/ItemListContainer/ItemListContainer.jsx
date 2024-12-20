import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    console.log("Categoría seleccionada:", categoryId); // Log para depurar categoría
    const fetchProducts = async () => {
      try {
        let productsQuery;

        if (categoryId) {
          productsQuery = query(
            collection(db, "productos"),
            where("category", "==", categoryId)
          );
        } else {
          productsQuery = collection(db, "productos");
        }

        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Productos cargados:", productsData); // Log para depurar productos
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2 style={{ color: "black", textAlign: "center", margin: "50px 0" }}>
        {greeting}
      </h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          listStyle: "none",
          padding: 0,
          justifyContent: "center",
        }}
      >
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
                height: "150px",
                objectFit: "cover",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
            <p
              style={{
                margin: "5px 0",
                fontSize: "14px",
                color: "#555",
              }}
            >
              {product.description}
            </p>
            <p
              style={{
                margin: "5px 0",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Precio: ${product.price}
            </p>
            <Link
              to={`/item/${product.id}`}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#007bff",
                padding: "5px 10px",
                borderRadius: "4px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
