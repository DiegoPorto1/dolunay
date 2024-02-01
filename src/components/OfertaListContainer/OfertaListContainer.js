import './OfertaListContainer.css'
import {useState,useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { products, products2 } from '../../asyncMockO';
import OfertaList from '../OfertaList/OfertaList';


const OfertaListContainer = ({greeting}) =>  {
    
    const [loanding, setLoanding] = useState(true)
    
    const {categoryId} = useParams ()

    useEffect(()=>{
        setLoanding (true);
        setTimeout(() => {
            setLoanding(false);
          }, 2000);
        

    }, [categoryId])

    const filteredProducts = categoryId
    ? products2.filter((product) => product.category === categoryId)
    : products2;


    return (
        <div className="OfertalistContainer">

            
<div className="titleOferta-container">
  <div className="line"></div>
  <h1 className="title">Destacados</h1>
  <div className="line"></div>
</div>
          <h1>{greeting}</h1>
          <OfertaList products2={filteredProducts}/>
        </div>
    )
}

export default OfertaListContainer