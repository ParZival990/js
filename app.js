

let f= prompt("Por favor digita la cantidad de filas que quiere que tenga el arreglo\n multidimencional ",);
let c = prompt("Por favor digita la cantidad de columnas que quiere que tenga el \narreglomultidimencional ",);

let mt = [f][c];

alert("Ahora hay que llenar la matriz [1]");
for(let i=0;i<f;i++){	//lleno la matriz 
    for(let j=0;j<c;j++){
      mt=[i][j]=prompt("digita numeros para llenar las filas y las columnas de la matiz. Ps["+i+"]["+j+"]: ",);
    }	
}

for(let i=0;i<f;i++){	//lleno la matriz 
    for(let j=0;j<c;j++){
        document.write("\n");
        document.write(mt[i][j]);
    }	
}

