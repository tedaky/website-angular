import { MySQL } from '../../config/db';
import { Version } from '../../types/version';

/**
 * Model for Version
 */
export class VersionModel {
  /**
   * Fetch the results from MySQL
   *
   * @return `Promise<Array<Version>>` - version Results
   */
  public async version(): Promise<Array<Version>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<Version>> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          awv.version_name,
          awv.version_image,
          awv.version_link,
          awv.version_order,
          awv.version_modified_at
        FROM version awv
        ORDER BY awv.version_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: Array<Version>, fields: any): void => {
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
    return a.then<Array<Version>, never>((val: Array<Version>): Array<Version> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
