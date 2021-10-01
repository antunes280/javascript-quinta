v // Inicializando uma array vazia para os nomes das peças
let listaNomes = [] 
// Variável vazia para entrada das peças na array
let nome = ''
// Inicializando outra array vazia para o peso das peças
let listaPeso = [] 
// Variável vazia para entrada das peças na array
let peso = ''


do {
    nome = prompt("Digite o nome da peça ou deixe em branco para cancelar!");
    if (nome.length < 3)
    alert('O nome da peça precisa ter no mínimo 3 caracteres! \nNome digitado: ' + nome.toUpperCase+ '!')
        if (nome === "" || nome === null) 
        break;
    if (nome.length > 2 && peso > 101)
        listaNomes.push(nome);  // Nome será adicionado a array listaNomes
    if (nome.length < 3) // A pergunta pelo peso da peça só virá se o nome preencher os requisitos para entrar na array anterior.
        break
    peso = prompt("Qual o peso da peça?")
    if (peso < 101)
    alert('Peso da peça precisa ter mais de 100 gramas')
      if (peso === "" || peso === null) 
      break;
      if (peso > 101)
        listaPeso.push(peso);  // Peso será adicionado a array listaPeso
      if (peso < 101) // Caso o peso seja inválido o programa será encerrado
        break
    }
 while (listaPeso.length < 10); 
      if (listaPeso.length > 2)
      alert ('Limite de peças alcançado')
console.log(listaNomes)
console.log(listaPeso)
 var dupla = window.prompt("Digite a quantidade de pessoas para o Baile")
for (let contador = 0; contador <= dupla; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "    PAR   está Classificado! - Bem Vindo ao Baile!")
    } else if  (contador % 2 != 0) {
       console.log(contador + "    IMPAR está Desclassificado! - Infelizmente não poderá entrar no Baile!")
    } else { 
       console.log(contador + '\t numero "ZERO" 0')
    }
}