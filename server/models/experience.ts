import { MySQL } from '../../config/db';
import { Experience } from '../../types/experience';

/**
 * Model for Experience
 */
export class ExperienceModel {
  /**
   * Fetch the results from MySQL
   *
   * @return `Promise<Array<Experience>>` - experience Results
   */
  public async experience(): Promise<Array<Experience>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<Experience>> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          e.experience_order,
          e.experience_description,
          p.position_title,
          c.company_name,
          c.company_link,
          c.company_logo,
          c.company_description,
          e.experience_start_date,
          e.experience_end_date,
          e.experience_modified_at,
          c.company_modified_at,
          p.position_modified_at
        FROM experience e
        JOIN company c
        ON c.company_id = e.experience_company_id
        JOIN position p
        ON p.position_id = e.experience_position_id
        ORDER BY e.experience_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: Array<Experience>, fields: any): void => {
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
    return a.then<Array<Experience>, never>((val: Array<Experience>): Array<Experience> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
