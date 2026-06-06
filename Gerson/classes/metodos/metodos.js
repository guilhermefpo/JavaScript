let Empresa = class {
  constructor(nome, razaoSocial) {
    this.nome = nome;
    this.razaoSocial = razaoSocial;
  }

  descricao() {
    return `Nome: ${this.nome} ${this.razaoSocial}`;
  }
};

let empresa = new Empresa("ABC LTDA", "Mercado Online", "9999999999");

console.log(empresa.descricao());
