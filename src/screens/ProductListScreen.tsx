// src/components/Products.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products'); // Replace with your actual API endpoint
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products Screen</h1>
      <h1>Total: {products.length}</h1>
      <Link to="/products/new">Add a product</Link>
      {products.length === 0 && <p>No products found.</p>}

      {products.length > 0 && (
        <ul>
            {products.map((product) => (
            <>
                <li key={product.id}>
                    {product.title}
                    -
                    {product.description}
                    -
                    {product.price}
                </li>
            </>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
