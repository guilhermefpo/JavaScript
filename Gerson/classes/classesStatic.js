class Empresa {
  static telefoneGeral;
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj) {
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
  }

  get pegarCnpj() {
    return this.#cnpj;
  }
}

Empresa.telefoneGeral = "(12) 999999999";

console.log(`Telefone da empresa: \n ${Empresa.telefoneGeral}`);
