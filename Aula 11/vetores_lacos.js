// Vetores (Arrays)
const listaCompras = ["Tomate","Cebola","Farinha"]

// Um array pode conter vários tipos de dados diferentes
const misturado = ["Tomate", 8, true]

// Acrescentando elemento novo no vetor
listaCompras.push("Limão") // Acrescenta no final

// Modifica elemento específico
listaCompras[0] = "Laranja"
// Acrescenta na posição específica
listaCompras[4] = "Açúcar"

//console.log(listaCompras)
//console.log(listaCompras.length)

// Pop remove o último elemento e o exibe
let pop = listaCompras.pop()

//console.log(pop)
//console.log(listaCompras)

// for(começo; quando termina; acréscimo)

listaCompras.push("Amora")
// Laço For Clássico
for(let i = 0; i < listaCompras.length;i++){
  console.log(`Index ${i}: ${listaCompras[i]}`)
}

// percorrendo o vetor ao contrário
for(let i = listaCompras.length - 1; i >= 0;i--){
  console.log(`Index ${i}: ${listaCompras[i]}`)
}

/* for(const item of listaCompras){
  console.log(item)
} */

// Diz qual o índice de um elemento de um vetor (array)
// console.log(listaCompras.indexOf("Laranja"))

let x = 0

while(x < 10 ){
  console.log(x)
  x++
}
