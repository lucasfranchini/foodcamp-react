import Item from "../Item"

export default function Bebidas(){
    const bebidas = [
        {
            img:"imagens/coca.jpg",
            name: "Refrigerante",
            description: <>Lata 350ml</>,
            price: "4,90",
            type: "drink"
        },
        {
            img:"imagens/laranja.jpg",
            name: "Suco",
            description: <>Copo 300ml</>,
            price: "5,90",
            type: "drink"
        },
        {
            img:"imagens/laranja.jpg",
            name: "Suco Grande",
            description: <>Copo 500ml</>,
            price: "7,90",
            type: "drink"
        },
        {
            img:"imagens/Odin.jpg",
            name: "Cerveja Artesanal",
            description: <>Garrafa 600ml</>,
            price: "16,00",
            type: "drink"
        }
    ];
    return(
        <div class="bebida">
            <p class="titulo">Agora, sua bebida</p>
            <ul class="itens">
                {bebidas.map((bebida)=><Item img={bebida.img} name={bebida.name} description={bebida.description} price={bebida.price} type={bebida.type} />)}
            </ul>
      </div>
    );
}