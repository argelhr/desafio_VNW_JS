// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = true
if (dia)
    console.log("Está \"claro\" de dia meu irmão, pegue sol e tome agua")
else
    console.log("está escuro la fora, vá dormir!")

// 02 - Crie um loop for() que exiba apenas números pares no console.log()
const inicio = 0
const range = 20
for (let i = inicio; i < range; i++)
    i % 2 == 0 ?? console.log(`numero par encontrado: ${i}`)

// 03 - crie uma função que exiba uma mensagem no console
function mostraMensagem(evento) {
    console.log(evento)
}
mostraMensagem("Mensagem no console")//fui programador nessa

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostraNome(nome) {
    console.log(nome)
}
mostraNome("Argel")

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function mostraDados(nome, idade, estilo) {
    console.log(`${nome}=>Idade: ${idade}, Estilo musical:${estilo}`)
}
mostraDados("Argel", 28, "Rock")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function mostraFilmeEMusica(filme, musica) {
    console.log(`Filme: ${filme}, Musica: ${musica}`)
}
mostraFilmeEMusica("Homem de ferro", "Iron Man (Black Sabbath)")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function retornaTriplo(numero) {
    return numero * 3
}
console.log(retornaTriplo(5))

// 08 - crie uma função que  verifique se uma  variável é true ou false
function chama_o_var(variavel) {
    return variavel ? "é verdade" : "é de mentira"
}
console.log(chama_o_var(""))
console.log(chama_o_var(dia))//reaproveitando variavel
console.log(chama_o_var(false))
console.log(chama_o_var(5))

// 09 - Crie um array que receba 5 itens e exiba no console.
let abcde = []
abcde.push("a")
abcde.push("b")
abcde.push("c")
abcde.push("d")
abcde.push("e")
console.log(abcde)

// 10 - Utilize um método para adicionar um nome ao inicio do array.
abcde.unshift("Argel")
console.log(abcde)

// 11 - Utilize um método para remover o último nome do array.
let removido = abcde.pop()
console.log(removido, " - ", abcde)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
abcde.push("Carol", "Grazy", "Kleber")
console.log(abcde)

// 13 - Utilize um método para remover o primeiro nome do array.
removido = abcde.shift();
console.log(abcde)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort()
console.log(numbers)

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = { nome: "Argel", idade: 28, sexo: "Masculino" }
console.log(pessoa)

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoa["corOlhos"] = "Azul"
console.log(pessoa)

// 17 - Remova uma propriedade desse objeto.
delete pessoa.sexo
console.log(pessoa);

// 18 - Mostre no console todas as propriedades desse objeto.
for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`)
}

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
const cadastro = []
cadastro.push({ nome: "João" })
cadastro.push({ nome: "Maria" })
cadastro.push({ nome: "Pedro" })
cadastro.push({ nome: "Ana" })
cadastro.push({ nome: "Jose" })
console.table(cadastro)

// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
cadastro[0].idade = 20
cadastro[1].idade = 21
cadastro[2].idade = 22
cadastro[3].idade = 23
cadastro[4].idade = 24

cadastro[0].telefone = "+5553999999999"
cadastro[1].telefone = "+5553999999999"
cadastro[2].telefone = "+5553999999999"
cadastro[3].telefone = "+5553999999999"
cadastro[4].telefone = "+5553999999999"

cadastro[0].amigos = []
cadastro[1].amigos = []
cadastro[2].amigos = []
cadastro[3].amigos = []
cadastro[4].amigos = []

console.table(cadastro)

// Na propriedade amigos, adicione ao menos 4 amigos.
cadastro[0].amigos.push("Kelly")
cadastro[0].amigos.push("Fernanda")
cadastro[0].amigos.push("Nathans")
cadastro[0].amigos.push("Guilhermes")

cadastro[1].amigos.push("Gabriel")
cadastro[1].amigos.push("Marla")
cadastro[1].amigos.push("Larissa")
cadastro[1].amigos.push("Diogo")

cadastro[2].amigos.push("Suzana")
cadastro[2].amigos.push("Marcio")
cadastro[2].amigos.push("Danrley")
cadastro[2].amigos.push("Raquel")

cadastro[3].amigos.push("Bianca")
cadastro[3].amigos.push("Cristina")
cadastro[3].amigos.push("Sara")
cadastro[3].amigos.push("Paula")

cadastro[4].amigos.push("Amanda")
cadastro[4].amigos.push("Eduardo")
cadastro[4].amigos.push("Gestrude")
cadastro[4].amigos.push("Isabelle")


// 20 - Mostre no console o nome de um amigo de cada lista.
for(let person of cadastro){
    for(let amigo of person.amigos){
        console.log(`${person.nome} é amigo de ${amigo}`)
    }
}