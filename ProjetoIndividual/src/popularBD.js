import { Bebidas } from "./classes/Bebidas.js";
import { Lanches } from "./classes/Lanches.js";
import { Porcoes } from "./classes/Porcoes.js";

export const BD = [];

export const popularBD = () => {

  const lanche1 = new Lanches(1, "Hambúrguer Simples", 15.00, "Carne de hambúrguer, ovo, mussarela, tomate, alface, bacon, MMC", "comum");
  const lanche2 = new Lanches(2, "Hambúrguer Duplo", 19.00, "2 carnes de hambúrguer, ovo, presunto, mussarela, tomate, alface, bacon, MMC", "comum");
  const lanche3 = new Lanches(3, "Hambúrguer Artesanal", 32.00, "Carne Artesanal, creamcheese, tomate, alface americana, bacon, molho grill", "artesanal");

  BD.push(lanche1, lanche2, lanche3);

  const porcao1 = new Porcoes(1, "Porção de Batata", 18.00, "350g", "Quente");
  const porcao2 = new Porcoes(2, "Porção de Batata", 30.00, "700g", "Quente");
  const porcao3 = new Porcoes(3, "Porção de Frios", 23.00, "350g", "Frio");

  BD.push(porcao1, porcao2, porcao3);

  const bebida1 = new Bebidas(1, "Coca-Cola", 6.00, "350ml", "Refrigerante", "Lata");
  const bebida2 = new Bebidas(2, "Coca-Cola", 12.00, "2L", "Refrigerante", "Garrafa");
  const bebida3 = new Bebidas(3, "Guaraná Antártica", 10.00, "2L", "Refrigerante", "Garrafa");
  const bebida4 = new Bebidas(4, "Suco de Laranja", 10.00, "500ml", "Suco Natural", "Copo");
  const bebida5 = new Bebidas(5, "Heineken", 6.00, "350ml", "Alcoólica", "Long Neck");

  BD.push(bebida1, bebida2, bebida3, bebida4, bebida5);
}

