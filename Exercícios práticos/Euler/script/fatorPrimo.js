const primo = 600851475143;
let conta = 0; 
var array = new Array(primo) ;
for (var cont = 1; cont < primo; cont+=2){
    if(primo % cont == 0){
        var numero = cont;
        for (var aux = 2; aux < numero; aux++ ){
            if(numero % aux == 0){
                array[conta] = cont;
                conta ++;
            }
        }
        
    }
}
var arrayLength = array.length;
for (var cont = 0; cont < arrayLength; cont++){
    document.write("<p>" +array[cont] + "</p>");
}