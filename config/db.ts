import * as mysql from 'mysql';

/**
 * The MySQL Connection
 */
export class MySQL {
  private host: string;
  private user: string;
  private pass: string;
  private db: string;

  public connection: mysql.Connection;

  constructor() {

    const { host, user, pass, db } = require('../environment');

    this.host = host;
    this.user = user;
    this.pass = pass;
    this.db = db;

    this.connect();
    this.createConnect();
  }

  /**
   * Create Connection credentials
   */
  private connect(): void {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.db
    });
  }

  /**
   * Connect and throw error upon failure
   */
  private createConnect(): void {
    this.connection.connect((err: mysql.MysqlError): void => {
      if (err) {
        throw err;
      }
    });
  }
}
