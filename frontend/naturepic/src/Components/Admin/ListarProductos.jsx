import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

function ListarProductos() {
  const products = useContext(DataContext);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarProductos;