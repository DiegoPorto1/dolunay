
import { useState, useEffect } from 'react';
import AdminItemList from '../AdminItemList/AdminItemList';
import { getProductByCategory, products } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const AdminItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Categoría actual en useEffect:', categoryId);

        // Obtener todos los productos
        const allProducts = await getProductByCategory();

        // Filtrar por categoría si hay una seleccionada
        const categoryProducts = categoryId
          ? allProducts.filter((prod) => prod.category === categoryId)
          : allProducts;

        console.log('Productos filtrados por categoría:', categoryProducts);
        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="listContainer">
      <div className="title-container">
        <div className="line"></div>
        <h1 className="title">Productos</h1>
        <div className="line"></div>
      </div>
      <h1>{greeting}</h1>
      <AdminItemList products={filteredProducts} />
    </div>
  );
};

export default AdminItemListContainer;