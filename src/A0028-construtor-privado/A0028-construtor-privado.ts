/**
 * Aqui temos uma classe privada, neste exemplo extremamente util podemos
 * perceber que o codigo serve para caso já esteja ocorrendo uma conexão
 * com o db não iremos criar outra
 *
 * Funções privadas podem ser utilizadas com metodos estaticos para
 * termos um controle maior sobre o que esta instanciando a classe
 */

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password} `);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');
console.log(db1 === db2);
