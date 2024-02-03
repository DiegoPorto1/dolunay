import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useRef } from "react";

const UpdateProduct = ({ history }) => {
  const formRef = useRef(null);
  const { isAuthenticated } = useAuth();
  const { productId } = useParams();

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    status: true,
    code: '',
    thumbnails: [],
  });

  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log('Fetching product details for productId:', productId);
        const response = await fetch(`https://donulayback.onrender.com/api/products/${productId}`);
        if (!response.ok) {
          const errorMessage = await response.text();
          console.error('Error fetching product details:', errorMessage);
          return;
        }

        const productData = await response.json();
        console.log('Response:', productData);

        const initialProduct = {
          title: productData.title || '',
          description: productData.description || '',
          price: productData.price || 0,
          stock: productData.stock || 0,
          category: productData.category || '',
          status: productData.status || true,
          code: productData.code || '',
          thumbnails: productData.thumbnails || [],
        };

        setProduct(initialProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'thumbnails') {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: files ? Array.from(files) : [],
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData(formRef.current); // Usar formRef.current directamente
      const data = Object.fromEntries(formData.entries());
  
      if (isAuthenticated) {
        const token = localStorage.getItem('token');
        console.log('Token almacenado:', token);
        const response = await fetch(`https://donulayback.onrender.com/api/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` ${token}`,
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          setSuccessMessage('¡Producto actualizado con éxito!');
          console.log('Producto actualizado con éxito');
  
          setTimeout(() => {
            if (history && history.push) {
              history.push('http://localhost:3000/admin');
            }
          }, 1000);
        } else {
          console.error('Error updating product:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleGoToAdmin = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h2>Actualizar Producto</h2>
     
      <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" >
        <label>
          Nombre:
          <input type="text" name="title" value={product.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Categoría:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <br />
        <label>
          Estado:
          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            required
          >
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </label>
        <br />
        <label>
          Imágenes (separadas por coma):
          <input type="file" name="thumbnails" multiple onChange={handleChange} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Actualizar Producto</button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        
      </form>
      <Link to="/admin" onClick={handleGoToAdmin} >Volver</Link>
    </div>
  );
};

export default UpdateProduct;