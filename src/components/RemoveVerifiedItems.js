export default function removeVerifiedItem(selectedTypes,item,selectedItems,setSelectedItems,counter,setCounter,setSelectedTypes,setCheck){
    let items;
    if(counter-1===0){
        if(selectedItems.find((selectedItem)=>(selectedItem.type===item.type && selectedItem.name !== item.name))===undefined){
            item.type==="principal" && (selectedTypes.principal=false);
            item.type==="drink" && (selectedTypes.drink=false);
            item.type==="desert" && (selectedTypes.desert=false);
            setSelectedTypes(selectedTypes);
        }
        setCheck(false);
        items = selectedItems.filter((selectedItem)=>(selectedItem.name !== item.name));
    }
    else{
        items = selectedItems.map((selectedItem)=>{
            (selectedItem.name === item.name) && selectedItem.qtd--;
            return selectedItem;
        }); 
    }
    setSelectedItems(items);
    setCounter(counter-1);
    
}