function suma(a,b){
//let s=0;
//s=a+b;
return a+b;
}
// implementar multiplica
//implementar resta

function divide1(a,b){
    if (a==0 || b== 0) {
        console.log('a <> 0 y b <> 0');
    } 
    return (a/b);
}
function divide2(a,b){
    if (a==0 || b== 0) {
        console.log('a <> 0 y b <> 0');
    } 
    return (a%b);
}
//console.log(divide1(1,2));
//console.log(divide1(0,2));
//console.log(suma(1,2));


// realizar una funcion que permita evaluar la siguiente expresión  en Operaciones.js
//algebraica
//  2X + 3(AB-3)-Z  +(A/B) con A Y B <> 0

exports.divide1=divide1;
exports.divide2=divide2;
exports.suma=suma;


