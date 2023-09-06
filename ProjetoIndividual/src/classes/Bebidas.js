import { Produtos } from "./Produtos.js";

export class Bebidas extends Produtos {

  #id
  #tamanho
  #categoria
  #embalagem

  constructor(id, nome, preco, tamanho, categoria, embalagem) {
    super(nome, preco, 0)
    this.id = id;
    this.tamanho = tamanho;
    this.categoria = categoria;
    this.embalagem = embalagem;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get tamanho() {
    return this.#tamanho;
  }

  set tamanho(tamanho) {
    this.#tamanho = tamanho;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  get embalagem() {
    return this.#embalagem;
  }

  set embalagem(embalagem) {
    this.#embalagem = embalagem;
  }
}
