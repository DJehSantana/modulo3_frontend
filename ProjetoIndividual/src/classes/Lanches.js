import { Produtos } from "./Produtos.js";

export class Lanches extends Produtos {
  constructor(id, nome, preco, ingredientes, categoria) {
    super(nome, preco, 0)
    this.id = id;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
  }
}
