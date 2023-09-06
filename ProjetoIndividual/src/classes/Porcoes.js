import { Produtos } from "./Produtos.js";

export class Porcoes extends Produtos {

  #id
  #peso
  #tipo

  constructor(id, nome, preco, peso, tipo) {
    super(nome, preco, 0)
    this.id = id;
    this.peso = peso;
    this.tipo = tipo;
  }


  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get peso() {
    return this.#peso;
  }

  set peso(peso) {
    this.#peso = peso;
  }

  get tipo() {
    return this.#tipo;
  }

  set tipo(tipo) {
    this.#tipo = tipo;
  }
}

