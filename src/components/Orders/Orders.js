import "./Orders.css";
export default function Orders(props){
    const principal = props.selectedItems.filter((item)=>item.type==="principal");
    const drink = props.selectedItems.filter((item)=>item.type==="drink");
    const desert = props.selectedItems.filter((item)=>item.type==="desert");
    console.log(principal);
    console.log(drink);
    console.log(desert);
    return(
        <div className="orders">
            <span>{principal[0].qtd>1 ? principal[0].qtd+"x ": ""}{principal[0].name}</span>
     
        </div>

    );
}