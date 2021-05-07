export default function PrintItem(props){
    return(
        <>
            <div className={props.type}>
                <span>{props.item.qtd>1 ? props.item.qtd+"x ": ""}{props.item.name}</span>
                <span>{props.item.price}</span>
            </div>
        </>
    )

}