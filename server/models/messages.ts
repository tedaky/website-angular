import { MySQL } from '../../config/db';
import { IMessage } from './message';

/**
 * Model for the Messages
 */
export class MessagesModel {
  /**
   * Fetch the results from MySQL `message` table
   *
   * @return `Promise<IMessage[]>` - message Results
   */
  public async message(): Promise<IMessage[]> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<IMessage[]> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          message_id,
          message_description,
          message_modified_at
        FROM message
        ORDER BY message_modified_at ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: IMessage[], fields: any): void => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        }
      );
    });

    /**
     * Return the results from MySQL
     */
    return a.then((val: IMessage[]): IMessage[] => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
