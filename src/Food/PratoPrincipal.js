export default function PratoPrincipal(){
    return (
        <div className="principal">
        <p className="titulo">Primeiro, seu prato</p>
        <ul className="itens">
          <li className="item" onclick="pratoprincipal(0)">
            <img src="imagens/frango_yin_yang 1.png" alt=""/>
            <p><strong>Frango Yin Yang</strong></p>
            <p className="extras">Um pouco de batata,<br/>um pouco de salada</p>
            <p>R$ 14,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li className="item" onclick="pratoprincipal(1)">
            <img src="imagens/salmão.jpg" alt=""/>
            <p><strong>salmão grelhado</strong></p>
            <p className="extras">Um pouco de cuscuz,<br/>um pouco de legume</p>
            <p>R$ 21,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li className="item" onclick="pratoprincipal(2)">
            <img src="imagens/macarrão.jpg" alt=""/>
            <p><strong>Macarrão</strong></p>
            <p className="extras">Molho de tomate,<br/>queijo parmesão</p>
            <p>R$ 16,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li className="item" onclick="pratoprincipal(3)">
            <img src="imagens/ratatouille.jpg" alt=""/>
            <p><strong>ratatouille</strong></p>
            <p className="extras">Um pouco de legume,<br/>mais legumes</p>
            <p>R$ 18,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
        </ul>
      </div>
    );
}