import { Produtos } from "./Produtos.js";

export class Lanches extends Produtos {
  constructor(id, nome, preco, ingredientes, categoria) {
    super(nome, preco)
    this.id = id;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
  }
}
