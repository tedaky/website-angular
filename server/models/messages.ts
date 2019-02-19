import { MySQL } from '../../config/db';
import { Message } from '../../types/message';

/**
 * Model for the Messages
 */
export class MessagesModel {
  /**
   * Fetch the results from MySQL `message` table
   *
   * @return `Promise<Array<Message>>` - message Results
   */
  public async message(): Promise<Array<Message>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<Message>> = new Promise((resolve: any, reject: any): void => {
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
        (err: any, rows: Array<Message>, fields: any): void => {
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
    return a.then<Array<Message>, never>((val: Array<Message>): Array<Message> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
