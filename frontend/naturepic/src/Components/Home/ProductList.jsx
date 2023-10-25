import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import ProductItem from './ProductItem';

const ProductList = () => {
  const products = useContext(DataContext);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ margin: '10px' }}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
// import ProductItem from './ProductItem';

// const ProductList = ({ products }) => {
//   return (
//     <div>
//       {products.map(product => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;