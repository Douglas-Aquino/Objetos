// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    
    nome:"Douglas",
    idade:18,
    altura:170
}
console.log(sobreMim)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMim.peso = 57
console.log(sobreMim)

// Remova uma propriedade desse objeto.

delete sobreMim.peso


//Mostre no console todas as propriedades desse objeto.

console.log(sobreMim)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

let cadastro = [{pess1} ,{pess2},{pess3},{pess4},{pess5}]

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.
let Cadastro2 = [
    {
        nome:"douglas",
        idade:20,
        telefone:40029822,
        amigos:["amig1","amig2","amig3","amig4"]
    },
    
    {
        nome:"carou",
        idade:40,
        telefone:40029822,
        amigos:["amig5","amig6","amig7","amig8"]  
    },
    {
        nome:"Anitta",
        idade:28,
        telefone:40875122,
        amigos:["amig9","amig10","amig11","amig12"]
    },
    {
        nome:"vera",
        idade:25,
        telefone:40029822,
        amigos:["amig13","amig14","amig15","amig16"]
    },
    {
        nome:"lusi",
        idade:30,
        telefone:40029822,
        amigos:["amig17","amig8","amig19","amig20"]
    }]

// Mostre no console o nome de um amigo de cada lista.
console.log(Cadastro2.nome[0])