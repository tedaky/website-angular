import { MySQL } from '../../config/db';

/**
 * The MessageController of the Express application.
 */
export class MessageController {
  /**
   * Get the Message
   * @param req - The Request {NextFunction}
   * @param res - The Response {Response}
   * @param next - Move to the Next route {Request}
   */
  public getMessage(req: any, res: any, next: any): void {
    const connect: MySQL = new MySQL();

    connect.connection.query(
      'SELECT message_id, message_description FROM message where message_id = 1',
      /**
       * Mysql response
       * @param err - Error {mysql.MysqlError}
       * @param rows - Rows {any}
       * @param fields - Fields {mysql.FieldInfo[]}
       */
      (err: any, rows: any, fields: any): void => {
        if (err) {
          console.log('Error: ', err);
        } else {
          res.status(200).send(rows[0]);
        }
      }
    );

    connect.connection.end();
  }
}
