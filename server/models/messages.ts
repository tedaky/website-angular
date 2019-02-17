import { MySQL } from '../../config/db';
import { IMessageResponse } from '../../types/message';

/**
 * Model for the Messages
 */
export class MessagesModel {
  /**
   * Fetch the results from MySQL `message` table
   *
   * @return `Promise<IMessageResponse[]>` - message Results
   */
  public async message(): Promise<IMessageResponse[]> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<IMessageResponse[]> = new Promise((resolve: any, reject: any): void => {
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
        (err: any, rows: IMessageResponse[], fields: any): void => {
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
    return a.then<IMessageResponse[], never>((val: IMessageResponse[]): IMessageResponse[] => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
