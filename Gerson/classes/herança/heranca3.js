class PessoaGeral {
  nome;
  constructor(nome) {
    this.nome = nome;
  }

  get obterNome() {
    return this.nome;
  }
}

class PessoaJuridica extends PessoaGeral {
  razaoSocial = "Não integra nenhuma empresa";
  constructor(nome, razaoSocial = "Não integra nenhuma empresa") {
    super(nome);
    this.razaoSocial = razaoSocial;
  }

  get obterRazaoSocial() {
    return this.razaoSocial;
  }
}

// Criando uma pessoa física
let pessoa = new PessoaGeral("Guilherme");
console.log(`Nome: ${pessoa.obterNome}`);

// Criando uma pessoa jurídica
let juridica = new PessoaJuridica("Guilherme", "Empresa LDTA");
console.log(
  `Nome: ${juridica.obterNome}, Razão Social: ${juridica.obterRazaoSocial}`,
);

// Criando várias pessoas jurídicas
let pessoasJuridicas = [
  new PessoaJuridica("Guilherme", "GG Tecnology"),
  new PessoaJuridica("Maria", "Tech Solutions"),
  new PessoaJuridica("Carlos", "Construtora XYZ"),
  new PessoaJuridica("Alysa"),
];

pessoasJuridicas.forEach((p) => {
  console.log(`Nome: ${p.obterNome}, Razão Social: ${p.obterRazaoSocial}`);
});
