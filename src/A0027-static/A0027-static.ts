/**
 * O static serve para criarmos elementos da classe que
 * não fazem parte da classe já instanciada
 * por exemplo, neste caso criamos uma função que pode ser chamada a partir
 * de Pessoa.criaPessoa, esta tecnica pode ser usada quando tivermos alguns
 * padroes de projeto para seguir ou quando precisamos por algum motivo
 * uma variavel/função que deve ser usada dentro da classe sem a necessidade de instancia-la
 */

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Bruno', 'Beluco', 18, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Bruno', 'Beluco');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
