import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Hacer una solicitud a la nueva ruta en tu servidor
        const response = await fetch(`https://donulayback.onrender.com/productos/${itemId}`);

        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="containerdetail">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        product ? <ItemDetail {...product} /> : <p>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;