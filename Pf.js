const ListaNumeros=[2,4,6,8,10];
const nuevaLista= [];
for(i  in ListaNumeros){
console.log(ListaNumeros[i]);
nuevaLista.push(ListaNumeros[i]*2);
}// fin para
console.log(nuevaLista);

function duplicar(lista){
if(lista[0]==2)return console.log([[0]*2])
else
return duplicar([nuevaLista[1]*2]);
}
duplicar(ListaNumeros);
