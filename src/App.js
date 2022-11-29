import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authentication } from './store/features/auth/authSlice';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './Auth';
import { ProtectedRoutes } from './ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
            <Route path='*' element={<h1> Not found 404 </h1>} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
