class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj) {
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
  }

  #colocarMaiusculo(texto) {
    return texto.toUpperCase();
  }

  mostrarDetalhes() {
    return `Nome da Empresa: ${this.#colocarMaiusculo(this.razaoSocial)}
            \nNome Fantasia: ${this.#colocarMaiusculo(this.nomeFantasia)}`;
  }

  get pegarCnpj() {
    return this.#cnpj;
  }
}

let empresa = new Empresa("ABC LTDA", "Mercado Online", "9999999999");
console.log(`Detalhes:\n${empresa.mostrarDetalhes()}`);
