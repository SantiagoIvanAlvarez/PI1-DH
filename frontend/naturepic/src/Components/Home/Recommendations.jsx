import React from 'react';
import ProductList from './ProductList';

const Recommendations = ({ products }) => {
  return (
    <div className="recommendations">
      <h2>Productos Recomendados</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Recommendations;