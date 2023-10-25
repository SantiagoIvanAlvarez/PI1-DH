import React from 'react';
import ProductList from './ProductList';
import Recommendations from './Recommendations';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a nuestra tienda</h1>
      <ProductList />
      <Recommendations />
    </div>
  );
};

export default Home;


// import React, { useEffect, useState } from 'react';
// import ProductList from './ProductList';
// import SearchBar from './BarraDeBusqueda';
// import Categories from './Categorias';
// import Recommendations from './Recommendations';
// import Categorias from './Categorias';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     // obtener productos y las categorías de la api
//     fetchProducts();
//     fetchCategories();
//     fetchRecommendations();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('/api/productos');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error capturando productos', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('/api/categorias');
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error capturando productos', error);
//     }
//   };

//   const fetchRecommendations = async () => {
//     try {
//       const response = await fetch('/api/recomendaciones');
//       const data = await response.json();
//       setRecommendations(data);
//     } catch (error) {
//       console.error('Error capturando productos', error);
//     }
//   };

//   return (
//     <div className="home-page">
//       <Categorias categories={categories} />
//       <ProductList products={products} />
//       <Recommendations products={recommendations} />
//     </div>
//   );
// };

// export default Home;