import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../item/Item";
import './ItemList.css';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
            .then(response => {
                const productList = Array.isArray(response.data) ? response.data : [];
                const productsWithArrayImages = productList.map(product => {
                    return {
                        ...product,
                        thumbnails: Array.isArray(product.thumbnails) ? product.thumbnails : [product.thumbnails],
                    };
                });
                setProducts(productsWithArrayImages);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="list">
            {products.map(prod => <Item key={prod._id} {...prod} />)}
        </div>
    );
};

export default ItemList;