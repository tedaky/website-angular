import { MySQL } from '../../config/db';
import { Education } from '../../types/education';

/**
 * Model for Education
 */
export class EducationModel {
  /**
   * Fetch the results from MySQL
   *
   * @return `Promise<Array<Education>>` - education Results
   */
  public async education(): Promise<Array<Education>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<Education>> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          e.education_order,
          e.education_degree,
          e.education_field,
          e.education_cgpa,
          s.school_name,
          s.school_link,
          s.school_logo,
          e.education_start_date,
          e.education_end_date,
          e.education_modified_at,
          s.school_modified_at
        FROM education e
        JOIN school s
        ON s.school_id = e.education_school_id
        ORDER BY e.education_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: Array<Education>, fields: any): void => {
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
    return a.then<Array<Education>, never>((val: Array<Education>): Array<Education> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
