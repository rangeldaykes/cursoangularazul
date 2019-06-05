
let maioridade = function (anos: number): boolean {
    return anos > 18
}

let idade = 17

// template string
console.log(`a idade ${idade} e 
maior? ${maioridade(idade) ? 'Sim' : 'Não'}`)

let call = (name: string) => console.log(`Do you copy, ${name}`);
call('R2')

function inc(speed: number, inc: number = 1): number {
    return speed + inc
}
console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)