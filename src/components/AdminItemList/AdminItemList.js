import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminItem from "../AdminItem/AdminItem";
import { useNavigate } from 'react-router-dom';

const AdminItemList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://donulayback.onrender.com/api/products');
            const productsWithArrayImages = response.data.map(product => {
                return {
                    ...product,
                    img: Array.isArray(product.thumbnails) ? product.thumbnails : [product.thumbnails],
                };
            });
            setProducts(productsWithArrayImages);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = (productId) => {
        // Eliminar el producto del estado
        setProducts((prevProducts) => prevProducts.filter((prod) => prod._id !== productId));
    };

    const handleModify = (productId) => {
        
        navigate(`update/${productId}`);
        console.log(`Modificar producto con ID: ${productId}`);
    };

    return (
        <div className="list">
            {products.map(prod => (
                <AdminItem
                    key={prod._id}
                    {...prod}
                    onDelete={handleDelete}
                    onModify={handleModify}
                />
            ))}
        </div>
    );
}

export default AdminItemList;