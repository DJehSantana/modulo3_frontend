import { Produtos } from "./Produtos.js";

export class Bebidas extends Produtos {
  constructor(id, nome, preco, tamanho, categoria, embalagem) {
    super(nome, preco)
    this.id = id;
    this.tamanho = tamanho;
    this.categoria = categoria;
    this.embalagem = embalagem;
  }
}
