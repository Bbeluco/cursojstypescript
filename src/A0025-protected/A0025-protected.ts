/**
 * A ideia do protected é ser similar ao private
 * porém a sua principal caracteristica é que outras classes
 * que tenham relação com a classe que possui um elemento com protected
 * possam acessar esses elementos.
 * Isso garante que classes ou funções externas não interfiram no valor
 */

export class Empresa {
  readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11'); //Passei os valores esperados no construtor da empresa pelo constructor utilizando super
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Bruno', 'Beluco');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
