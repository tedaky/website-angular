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
          si.skill_item_id,
          si.skill_item_name,
          si.skill_item_level,
          si.skill_item_order,
          si.skill_item_skill_group_id,
          si.skill_item_modified_at
        FROM skill_item si
        JOIN skill_group sg
        ON si.skill_item_skill_group_id = sg.skill_group_id
        GROUP BY
          si.skill_item_id,
          si.skill_item_name,
          si.skill_item_level,
          si.skill_item_order,
          si.skill_item_skill_group_id,
          si.skill_item_modified_at
        ORDER BY si.skill_item_order ASC;`,
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
          sg.skill_group_id,
          sg.skill_group_name,
          sg.skill_group_order,
          sg.skill_group_modified_at
        FROM skill_group sg
        JOIN skill_item si
        ON si.skill_item_skill_group_id = sg.skill_group_id
        GROUP BY
          sg.skill_group_id,
          sg.skill_group_name,
          sg.skill_group_order,
          sg.skill_group_modified_at
        ORDER BY sg.skill_group_order ASC;`,
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
