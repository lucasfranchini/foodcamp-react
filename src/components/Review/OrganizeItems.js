export default function organizeItems(a,b){
    if(a.type===b.type) return 0;
    if(a.type==="principal" || (a.type==="drink" && b.type==="desert")) return -1;
    if(b.type==="principal" || (b.type==="drink" && a.type==="desert")) return 1;
}