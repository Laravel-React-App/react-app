// src/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/HomeScreen';
import Products from './screens/ProductListScreen';
import NewProductScreen from './screens/NewProductScreen';

const AppRouter: React.FC = () => {
  return (
    <Router>

            <Routes>
                <Route path="/"  Component={Home} />
                <Route path="/products" Component={Products} />
                <Route path="/products/new" Component={NewProductScreen} />
            </Routes>

    </Router>
  );
};

export default AppRouter;
