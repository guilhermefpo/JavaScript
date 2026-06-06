// Classes e Encapsulamento

// Campos públicos
class Empresa {
  constructor(razaoSocial, nomeFantasia, cnpj) {
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
  }
}

let empresa = new Empresa("ABC LTDA", "Mercado Online", "9999999999");

empresa.cnpj = "8888888";

console.log(`Qual o cnpj: ${empresa.cnpj}`);
