import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Detalle from './Components/Detalle/Detalle';
import Footer from './Components/Footer/Footer';
import Admin from './Components/Admin/Admin';
import AgregarProducto from './Components/Admin/AgregarProducto';
import ListarProductos from './Components/Admin/ListarProductos';


function App() {
  return (
    <>
      <Header />
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:productId' element={<Detalle />} />
        {/* Rutas de Administración */}
        <Route path='/admin' element={<Admin />}>
          <Route path='agregar-producto' element={<AgregarProducto />} />
          <Route path='lista-de-productos' element={<ListarProductos />} />
        </Route>
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;


