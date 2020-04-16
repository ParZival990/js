alert("Bienvenid@");
let f= prompt("Por favor digita la cantidad de (filas) que quieres guardar en el arreglo bidimencional ",);
let c = prompt("Por favor digita la cantidad de (columnas) que quiere ingresar en el arreglo bidimencional ",);

// let mt = [f][c];
//array bd [1]
let arrayB= new Array(f);
for (let i = 0; i < f; i++) {
   arrayB[i] = new Array(c);
}

//array bd [2]
let arrayB2= new Array(f);
for (let i = 0; i < f; i++) {
    arrayB2[i] = new Array(c);
 }

//----------------------------------------------------------------------------------------------
//llenado array bd 1 
alert("Ahora hay que llenar la matriz [1]");
for (let i = 0; i < f; i++){
    for(let j = 0; j < c; j++){
        arrayB[i][j] = Number =prompt("digita numeros para llenar las filas y las columnas de la matiz[1].\nPs["+i+"]["+j+"]:",);
    }	
}

//----------------------------------------------------------------------------------------------
//llenando array bd 2
alert("Ahora hay que llenar el matriz [2]");
for (let i = 0; i < f; i++){
    for(let j = 0; j < c; j++){
        arrayB2[i][j]= Number= prompt("digita numeros para llenar las filas y las columnas de la matiz[2].\nPs["+i+"]["+j+"]:",);
    }	
}

//Multiplicacion
document.write("<h1>Producto de dos Arreglos Bidimencionales</h1>");
document.write("</br>");
document.write
("---------------------------------------Multiplicacion---------------------------------------");

document.write("</br>");
for (let i = 0; i < f; i++){
    for(let j = 0; j < c; j++){
        document.write("</br>"+"el resultado del producto de las posiciones "+"["+i+"]"+"["+j+"]"+" de las matrices es: " +(arrayB[i][j]*arrayB2[i][j]));
   }
   	document.write("\n");
}

document.write("</br>");
document.write("</br>");
document.write
("--------------------------------------La matriz [1]-----------------------------------------");

document.write("</br>");
for (let i = 0; i < f; i++){
    for(let j = 0; j < c; j++){
        document.write("["+arrayB[i][j]+"]");
    }	
    document.write("</br>"); 
}

document.write("</br>");
document.write
("-------------------------------------La matriz [2]------------------------------------------");

document.write("</br>");
for (let i = 0; i < f; i++){
    for(let j = 0; j < c; j++){
        document.write("["+arrayB2[i][j]+"]");
    }	
    document.write("</br>"); 
}
