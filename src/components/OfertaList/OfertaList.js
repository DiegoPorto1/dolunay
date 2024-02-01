import Item from "../item/Item";
import { products2 } from "../../asyncMockO";

const OfertaList = () => {
    const productsx = products2;
    return (
        <div className="list">
   {productsx.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default OfertaList;