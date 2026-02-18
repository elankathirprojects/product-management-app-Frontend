// import React from 'react';

// function App() {
//   return (
//     <div style={{ textAlign: 'center' }}>
//       <header>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material/styles';
import { store } from './store/store';
import { theme } from './theme';

import MainLayout from './components/layout/MainLayout';
import Login from '../src/pages/auth/Login';
import Register from '../src/pages/auth/Register';
import Dashboard from '../src/pages/dashboard/Dashboard';
import ProductsList from '../src/pages/products/ProductList';
import AddProduct from '../src/pages/products/AddProduct';
import EditProduct from '../src/pages/products/EditProduct';
import ProductDetail from '../src/pages/products/ProductDetail';
import Users from '../src/pages/users/Users';
import Settings from '../src/pages/settings/Settings';

function App() {
  const isAuthenticated = true; // Replace with real auth check from Redux

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/:id/edit" element={<EditProduct />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
