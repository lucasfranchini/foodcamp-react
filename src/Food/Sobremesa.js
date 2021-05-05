export default function Sobremesa(){
    return(
        <div class="sobremesa">
        <p class="titulo">Por fim, sua sobremesa</p>
        <ul class="itens">
          <li class="item" onclick="sobremesas(0)">
            <img src="imagens/pudim.png" alt=""/>
            <p><strong>Pudim</strong></p>
            <p class="extras">Apenas pudim</p>
            <p>R$ 14,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li class="item" onclick="sobremesas(1)">
            <img src="imagens/petit-gateu.jpg" alt=""/>
            <p><strong>Petit gateu</strong></p>
            <p class="extras">sorvete, bolo e calda</p>
            <p>R$ 16,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li class="item" onclick="sobremesas(2)">
            <img src="imagens/sorvete.jpg" alt=""/>
            <p><strong>Sorvete</strong></p>
            <p class="extras">apenas sorvete</p>
            <p>R$ 8,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
          <li class="item" onclick="sobremesas(3)">
            <img src="imagens/acai.jpg" alt=""/>
            <p><strong>Açai</strong></p>
            <p class="extras">açai 500ml</p>
            <p>R$ 12,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </li>
        </ul>
      </div>
    );
}