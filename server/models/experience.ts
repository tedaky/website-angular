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
          awe.experience_order,
          awe.experience_description,
          awp.position_title,
          awc.company_name,
          awc.company_link,
          awc.company_logo,
          awc.company_description,
          awe.experience_start_date,
          awe.experience_end_date,
          awe.experience_modified_at,
          awc.company_modified_at,
          awp.position_modified_at
        FROM experience awe
        JOIN company awc
        ON awc.company_id = awe.experience_company_id
        JOIN position awp
        ON awp.position_id = awe.experience_position_id
        ORDER BY awe.experience_order ASC;`,
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
