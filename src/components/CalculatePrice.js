export default function CalculatePrice(item, total){   
        item.price =item.price.replace(",",".");
        item.price = parseFloat(item.price);
        item.price = item.price * item.qtd;
        total.price += item.price;
        item.price = item.price.toFixed(2);
        item.price =item.price.replace(".",",");
}