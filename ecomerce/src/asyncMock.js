import procesadorImg from "./assets/img/ryzen5.1.png";
import motherboardImg from "./assets/img/mother3.png";
import memoriaImg from "./assets/img/Memoria.png";
import monitorImg from "./assets/img/monitor.png";
import mouseImg from "./assets/img/Mause.jpg";
import tecladoImg from "./assets/img/teclado.jpg";


const products = [
    {
      id: 1,
      name: "Procesador",
      price: 296989,
      category: "hardware",
      img: procesadorImg,
      stock: 5,
      description: "Un procesador potente para tus tareas.",
    },
    {
      id: 2,
      name: "motherboard",
      price: 291999,
      category: "hardware",
      img: motherboardImg,
      stock: 3,
      description: "Placa base de alta calidad.",
    },
    {
      id: 3,
      name: "Memorias",
      price: 45999,
      category: "hardware",
      img: memoriaImg,
      stock: 10,
      description: "Memorias DDR4 rápidas y confiables.",
    },
    {
      id: 4,
      name: "Monitores",
      price: 196799,
      category: "peripherals",
      img: monitorImg,
      stock: 2,
      description: "Monitor de alta resolución.",
    },
    {
      id: 5,
      name: "Mouse",
      price: 64999,
      category: "peripherals",
      img: mouseImg,
      stock: 15,
      description: "Mouse ergonómico y preciso.",
    },
    {
      id: 6,
      name: "Teclado",
      price: 40712,
      category: "peripherals",
      img: tecladoImg,
      stock: 8,
      description: "Teclado mecánico retroiluminado.",
    },
  ];
  
  
  // Función para obtener todos los productos

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });
  };
  
  // Función para obtener productos por categoría

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
      }, 1500);
    });
  };
  
  // Función para obtener un producto por ID

  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === id));
      }, 1500);
    });
  };
  