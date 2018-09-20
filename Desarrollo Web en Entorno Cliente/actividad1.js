var texto = 'Hola me llamo Alejandro y soy un crack';

var array = texto.split(' ');

 Map = new Map();
for (let i = 1; i < array.length; i++) {
    let palabra = array[i];
    if(Map.has(palabra)){
        let count = Map.get(palabra);
        Map.set(palabra,count+1);
    }
}
let i = 0;
console.log(++i);
console.log(i);


