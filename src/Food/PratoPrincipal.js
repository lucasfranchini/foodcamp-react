import Item from "../Item"

export default function PratoPrincipal(){
    const pratos = [
        {
            img:"imagens/frango_yin_yang 1.png",
            name: "Frango Yin Yang",
            description: "Um pouco de batata, um pouco de salada",
            price: "14,90",
            type: "principal"
            
        },
        {
            img:"imagens/salmão.jpg",
            name: "salmão grelhado",
            description: "Um pouco de cuscuz, um pouco de legume",
            price: "21,90",
            type: "principal"
        },
        {
            img:"imagens/macarrão.jpg",
            name: "Macarrão",
            description: "Molho de tomate, queijo parmesão",
            price: "16,90",
            type: "principal"
        },
        {
            img:"imagens/ratatouille.jpg",
            name: "ratatouille",
            description: "Um pouco de legume, mais legumes",
            price: "18,90",
            type: "principal"
        }
    ]

    return (
        <div className="principal">
            <p className="titulo">Primeiro, seu prato</p>
            <ul className="itens">
                {pratos.map((prato)=><Item img={prato.img} name={prato.name} description={prato.description} price={prato.price} type={prato.type} />)}
            </ul>
      </div>
    );
}

