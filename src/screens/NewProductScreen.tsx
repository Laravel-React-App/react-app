// src/components/NewProductScreen.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProductScreen: React.FC = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/products', {
        title,
        price,
        description,
      });
      console.log(response.data); // You can handle the response as needed
      // Optionally, you can navigate the user to a different page or show a success message.
      if (response.status === 201) {
        navigate('/products');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h1>Create New Product</h1>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCreateProduct}>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default NewProductScreen;
