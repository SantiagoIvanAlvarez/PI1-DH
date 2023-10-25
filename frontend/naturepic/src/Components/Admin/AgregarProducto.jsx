import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';

function AgregarProducto() {
  const products = useContext(DataContext);
  const setProducts = products[1];

  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    image: ''
  });

  const handleChange = e => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Descripción:
          <textarea name="description" value={newProduct.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Imagen URL:
          <input type="text" name="image" value={newProduct.image} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AgregarProducto;