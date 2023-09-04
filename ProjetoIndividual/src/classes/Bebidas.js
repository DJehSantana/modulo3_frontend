import { Produtos } from "./Produtos.js";

export class Bebidas extends Produtos {
  constructor(id, nome, preco, tamanho, categoria, embalagem) {
    super(nome, preco, 0)
    this.id = id;
    this.tamanho = tamanho;
    this.categoria = categoria;
    this.embalagem = embalagem;
  }
}
