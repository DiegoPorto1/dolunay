import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Welcome from './components/welcome/welcome';
import AboutUs from './components/aboutUs/aboutUs';
import Footer from './components/Footer/Footer';
import ImageCarousel from './components/Carousel/carousel';
import OfertaListContainer from './components/OfertaListContainer/OfertaListContainer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import React, { useState, useEffect } from 'react';
import Uploader from './components/uploader/uploader';
import UpdateProduct from './components/updateProduct/updateProduct';
import AdminItemListContainer from './components/AdminItemListContainer/AdminItemListContainer';
import Login from './components/login/Login';
import AdminPage from './components/AdminPage/AdminPage';
import { AuthProvider } from './context/AuthContext';
import AdminUsers from './components/AdminUser/adminUser';
import AdminUsersList from './components/adminUserList/adminUserList';
import AdminUserListContainer from './components/AdminUserListContainer/AdminUserListContainer';





function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      
        <CartProvider>
        <AuthProvider>
          {/* Coloca tu pantalla de carga aquí */}
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<ItemListContainer  />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/products" element={<AdminItemListContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/products/update/:productId" element={<UpdateProduct />} />
                <Route path="/admin/uploader" element={<Uploader />} />
                <Route path="/admin/users" element={<AdminUserListContainer />} />
              </Routes>
              <Footer />
            </>
          )}
          </AuthProvider>
        </CartProvider>
        
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>

      <Welcome />
      <AboutUs />
      
      <ItemListContainer />
      
      
    </div>
  );
}



export default App;
