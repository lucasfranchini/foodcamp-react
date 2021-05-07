import Topo from "../cabecalho e rodape/Topo";
import Orders from "../Orders";
import "./Review.css";
import {Link} from "react-router-dom";
export default function Review(props){
    const {setSelectedItems} = props;
    return(
        <div className="review">
        <Topo/>
        <h1>Revise seu pedido</h1>
        <Orders/>
        <button className="confirm">Tudo certo, pode pedir!</button>
        <button className="cancel" onClick={()=>setSelectedItems([])}><Link to="/">Cancelar</Link></button>
        </div>
    );
}