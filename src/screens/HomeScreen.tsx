// src/screens/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Screen</h1>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default Home;
