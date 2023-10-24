import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <nav>
        <Link to='agregar-producto'>Agregar Producto</Link>
        <Link to='lista-de-productos'>Listar Productos</Link>
      </nav>
      <Outlet /> {/* Esto renderizará el componente correspondiente a la ruta anidada */}
    </div>
  );
}

export default Admin;
