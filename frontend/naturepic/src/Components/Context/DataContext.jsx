import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    return (
        <DataContext.Provider value={products}>
            {children}
        </DataContext.Provider>
    );
};







// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const DataContext = createContext();

// const API_URL = "http://localhost:8080/products";

// export const DataProvider = ({ children }) => {

//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(API_URL);
//       console.log(response);

//     } catch (err) {
//       setError("Something went wrong!");
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []); 

//   const addProduct = async (newProduct) => {
//     setIsLoading(true);
//     setError(null);

//     try {

//       const response = await axios.post(API_URL, newProduct);

//       setProducts(prevProducts => [...prevProducts, response.data]);

//     } catch (err) {
//       setError("Something went wrong!");
//     }
//     setIsLoading(false);
//   };

//   const value = {
//     products,
//     addProduct,
//     isLoading,
//     error,
//   };

//   return (
//     <DataContext.Provider value={value}>
//       {children}
//     </DataContext.Provider>
//   );
// };
