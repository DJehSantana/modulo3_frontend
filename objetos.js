class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa = new Pessoa('João', 25);

console.log(pessoa);
console.log(JSON.stringify(pessoa));
console.dir(pessoa);
