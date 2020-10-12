var numeros= [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];


function aprobaronExamen(x){
        return x >= 4;
}  

var filtro = numeros.filter(a=>a.every(aprobaronExamen));
    

console.log(filtro);
