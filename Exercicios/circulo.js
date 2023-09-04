class Circulo {
  constructor(raio, cor = "red") {
    this.raio = raio
    this.cor = cor
  }

  area() {
    return Math.PI * Math.pow(this.raio, 2)
  }

  perimetro() {
    return 2 * Math.PI * this.raio
  }

  diametro() {
    return 2 * this.raio
  }

  imprimir() {
    document.write(`<div style='width: ${this.diametro()}px; height: ${this.diametro()}px; border-radius: 100%; background-color: ${this.cor}'></div>`)
  }
}

const c = new Circulo(50, "#133");

c.imprimir();

console.log(c.area());