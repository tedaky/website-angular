import { MySQL } from '../../config/db';

/**
 * The MessageController of the Express application.
 */
export class MessageController {
  /**
   * Get the Message
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getMessage(req: any, res: any, next: any): void {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

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
      (err: any, rows: any, fields: any): void => {
        if (err) {
          console.log('Error: ', err);
        } else {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Last-Modified', (rows[0].message_modified_at).toString());
          res.header('Content-Type', 'application/json');
          res.send(rows);
        }
      }
    );

    connect.connection.end();
  }
}
