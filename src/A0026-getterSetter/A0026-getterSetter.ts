/**
 * Aqui podemos observar getters e setters
 * Por convenção utilize a variável privada que receberá alterações com um _
 * isso porque ocasionalmente teremos que chama-la nas funções
 * e se tiver o mesmo nome da função ocorrerá um stack overflow
 * (consiste na função ficar chamando ela mesma em um loop infinito)
 */

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const n1 = new Pessoa('Bruno', 'Beluco', 18, '123.456.789-00');
n1.cpf = '123.456.789-99';
console.log(n1.cpf);
