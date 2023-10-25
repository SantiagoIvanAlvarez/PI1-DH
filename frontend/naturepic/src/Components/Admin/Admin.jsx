import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <nav>
        <ul>
          <li><Link to="agregar-producto">Agregar Producto</Link></li>
          <li><Link to="lista-de-productos">Lista de Productos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Admin;




// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// function Admin() {
//   return (
//     <div className='divAdmin'>
//       <h1>Panel de Administración</h1>
//       <nav>
//         <Link to='agregar-producto'>Agregar Producto</Link>
//         <Link to='lista-de-productos'>Listar Productos</Link>
//       </nav>
//       <Outlet /> {/* Esto renderizará el componente correspondiente a la ruta anidada */}
//       <button className='Admin-button-EliminarProducto'>Eliminar Producto</button>
//     </div>
//   );
// }

// export default Admin;
