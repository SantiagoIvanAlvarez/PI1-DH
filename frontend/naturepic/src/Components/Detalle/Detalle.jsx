import React, { useState, useEffect } from 'react';
import Galeria from './Galeria';
import InfoProducto from './InfoProducto';
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div>
      
    </div>
  );
};

export default Detalle;