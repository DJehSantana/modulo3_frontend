class Pessoa {
  constructor(idade, nome) {
    this.idade = idade;
    this.nome = nome;
  }
}

class Cidadao extends Pessoa {
  constructor(idade, nome, cpf) {
    super(idade, nome)
    this.cpf = cpf;

  }
}

const c = new Cidadao(25, 'Bruno', 12345456);

console.log(c instanceof Pessoa);