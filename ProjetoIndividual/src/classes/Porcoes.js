import { Produtos } from "./Produtos.js";

export class Porcoes extends Produtos {
  constructor(id, nome, preco, peso, tipo) {
    super(nome, preco)
    this.id = id;
    this.peso = peso;
    this.tipo = tipo;
  }
}

