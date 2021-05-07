import Topo from "../cabecalho e rodape/Topo";
import Orders from "../Orders/Orders";
import "./Review.css";
import {Link} from "react-router-dom";
import organizeItems from "../OrganizeItems";
export default function Review(props){
    const {setSelectedItems,selectedItems} = props;
    selectedItems.sort(organizeItems);
    console.log(selectedItems);
    return(
        <div className="review">
        <Topo/>
        <h1>Revise seu pedido</h1>
        <Orders selectedItems={selectedItems}/>
        <button className="confirm">Tudo certo, pode pedir!</button>
        <button className="cancel" onClick={()=>setSelectedItems([])}><Link to="/">Cancelar</Link></button>
        </div>
    );
}