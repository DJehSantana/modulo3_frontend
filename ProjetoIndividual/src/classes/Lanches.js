import { Produtos } from "./Produtos.js";

export class Lanches extends Produtos {

  #id
  #ingredientes
  #categoria

  constructor(id, nome, preco, ingredientes, categoria) {
    super(nome, preco, 0)
    this.id = id;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
  }


  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get ingredientes() {
    return this.#ingredientes;
  }

  set ingredientes(ingredientes) {
    this.#ingredientes = ingredientes;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

}
