import { MySQL } from '../../config/db';
import {
  ISkill,
  ISkillGroup
} from '../../types/skill';

/**
 * Model for the Skills
 */
export class SkillsModel {
  /**
   * Fetch the results from MySQL `skill` table
   *
   * @return `Promise<ISkill[]>` - skill Results
   */
  public async skill(): Promise<ISkill[]> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<ISkill[]> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          skill_id,
          skill_name,
          skill_level,
          skill_order,
          skill_skill_group_id,
          skill_modified_at
        FROM skill
        ORDER BY skill_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: ISkill[], fields: any): void => {
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
    return a.then((val: ISkill[]): ISkill[] => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }

  /**
   * Fetch the results from MySQL `skill_group` table
   *
   * @return `Promise<ISkillGroup[]>` - skill_group Results
   */
  public async skillGroup(): Promise<ISkillGroup[]> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<ISkillGroup[]> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          skill_group_id,
          skill_group_name,
          skill_group_order,
          skill_group_modified_at
        FROM skill_group
        ORDER BY skill_group_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: ISkillGroup[], fields: any): void => {
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
    return a.then((val: ISkillGroup[]): ISkillGroup[] => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
