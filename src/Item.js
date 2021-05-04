export default function Item(props){
    return (
        <li className="item">
            <img src={props.img}alt=""/>
            <p><strong>{props.name}</strong></p>
            <p className="extras">{props.description}</p>
            <p>{props.price}</p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </li>
    );
}