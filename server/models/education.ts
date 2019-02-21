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
          awe.education_order,
          awe.education_degree,
          awe.education_field,
          awe.education_cgpa,
          aws.school_name,
          aws.school_link,
          aws.school_logo,
          awe.education_start_date,
          awe.education_end_date,
          awe.education_modified_at,
          aws.school_modified_at
        FROM education awe
        JOIN school aws
        ON aws.school_id = awe.education_school_id
        ORDER BY awe.education_order ASC;`,
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
