import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la Tienda RM" />} />

        {/* Ruta para categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta para detalles de productos */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

