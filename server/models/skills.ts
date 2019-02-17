import { MySQL } from '../../config/db';
import {
  ISkillItem,
  ISkillGroup
} from '../../types/skill';

/**
 * Model for the Skills
 */
export class SkillsModel {
  /**
   * Fetch the results from MySQL `skill_item` table
   *
   * @return `Promise<ISkillItem[]>` - skill_item Results
   */
  public async skillItem(): Promise<ISkillItem[]> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<ISkillItem[]> = new Promise((resolve: any, reject: any): void => {
      connect.connection.query(
        `SELECT
          skill_item_id,
          skill_item_name,
          skill_item_level,
          skill_item_order,
          skill_item_skill_group_id,
          skill_item_modified_at
        FROM skill_item
        ORDER BY skill_item_order ASC;`,
        /**
         * Mysql response
         * @param err - `mysql.MysqlError`
         * @param rows - Rows `any`
         * @param fields - `mysql.FieldInfo[]`
         */
        (err: any, rows: ISkillItem[], fields: any): void => {
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
    return a.then<ISkillItem[], never>((val: ISkillItem[]): ISkillItem[] => {
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
    return a.then<ISkillGroup[], never>((val: ISkillGroup[]): ISkillGroup[] => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
