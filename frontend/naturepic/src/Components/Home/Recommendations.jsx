import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import ProductItem from './ProductItem';

const Recommendations = () => {
  const products = useContext(DataContext);
  const recommendations = products.slice(0, 3);

  return (
    <div>
      <h2>Recomendaciones</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recommendations.map(product => (
          <div key={product.id} style={{ margin: '10px' }}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
// import React from 'react';
// import ProductList from './ProductList';

// const Recommendations = ({ products }) => {
//   return (
//     <div className="recommendations">
//       <h2>Productos Recomendados</h2>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default Recommendations;