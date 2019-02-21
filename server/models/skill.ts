import { MySQL } from '../../config/db';
import {
  SkillItem,
  SkillGroup
} from '../../types/skill';

/**
 * Model for the Skill
 */
export class SkillModel {
  /**
   * Fetch the results from MySQL `skill_item` table
   *
   * @return `Promise<Array<SkillItem>>` - skill_item Results
   */
  public async skillItem(): Promise<Array<SkillItem>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<SkillItem>> = new Promise((resolve: any, reject: any): void => {
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
        (err: any, rows: Array<SkillItem>, fields: any): void => {
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
    return a.then<Array<SkillItem>, never>((val: Array<SkillItem>): Array<SkillItem> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }

  /**
   * Fetch the results from MySQL `skill_group` table
   *
   * @return `Promise<Array<SkillGroup>>` - skill_group Results
   */
  public async skillGroup(): Promise<Array<SkillGroup>> {
    /**
     * Create the `MySQL` connection
     */
    const connect: MySQL = new MySQL();

    /**
     * Create a promise for MySQL Fetch
     */
    const a: Promise<Array<SkillGroup>> = new Promise((resolve: any, reject: any): void => {
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
        (err: any, rows: Array<SkillGroup>, fields: any): void => {
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
    return a.then<Array<SkillGroup>, never>((val: Array<SkillGroup>): Array<SkillGroup> => {
      // End the current connection
      connect.connection.end();
      return val;
    });
  }
}
