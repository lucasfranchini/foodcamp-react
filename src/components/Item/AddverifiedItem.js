export default function addVerifiedItem(selectedTypes,item,selectedItems,setSelectedItems,counter,setCounter,setSelectedTypes){
    
    let items;
    if(counter===0){
        (item.type==="principal") && (selectedTypes.principal=true);
        (item.type==="drink") && (selectedTypes.drink=true);
        (item.type==="desert") && (selectedTypes.desert=true);
        setSelectedTypes(selectedTypes); 
        items = [...selectedItems,{...item,qtd: 1}];  
            
    }
    if(counter>0){
        items = selectedItems.map((selectedItem)=>{
            (selectedItem.name === item.name) && selectedItem.qtd++;
            return selectedItem;
        });    
    }
    setCounter(counter+1);
    setSelectedItems(items) ; 
}