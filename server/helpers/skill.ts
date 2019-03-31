import {
  SkillItem,
  SkillGroup,
  SkillGroupItem
} from '../../types/skill';
import { sortObjectByDate, sortObject } from '../../helpers/object-sort';
import { sortArrayByDate } from '../../helpers/array-sort';

/**
 * Helper for skills results from MySQL
 */
export class SkillHelper {
  /**
   * JSONify the skill
   *
   * @param skillItem - The Skill Items results
   * @param skillGroup - The Skill Groups results
   *
   * @return `Promise<Array<SkillGroupItem>>`
   */
  public async jsonify(skillItem: Array<SkillItem>, skillGroup: Array<SkillGroup>): Promise<Array<SkillGroupItem>> {
    // Sort the `SkillGroup`s
    skillGroup = sortObject<SkillGroup>(skillGroup, ['skill_group_order']);
    const response: Array<SkillGroupItem> = [];
    for (const tmpSkillGroup of skillGroup) {
      // filter the `SkillItem`s that only match `skill_group_id`
      let tmpSkillItem: Array<SkillItem> = skillItem.filter((val: SkillItem): boolean => {
        return (val.skill_item_skill_group_id === tmpSkillGroup.skill_group_id);
      });
      // Sort the remaining `SkillItem`s
      tmpSkillItem = sortObject<SkillItem>(tmpSkillItem, ['skill_item_order']);
      // Add the result to the response
      response.push({
        skill_group: tmpSkillGroup,
        skill_item: tmpSkillItem
      });
    }
    return response;
  }

  /**
   * Get the newest entry of `skill_item` and `skill_group`
   *
   * @param skill - `Array<SkillItem>`
   * @param skillGroup - `Array<SkillGroup>`
   * @return `Promise<Date>`
   */
  public async getNewest(skillItem: Array<SkillItem>, skillGroup: Array<SkillGroup>): Promise<Date> {
    return sortArrayByDate<Date>([
      // Ascending sort of `skillGroup` by `skill_group_modified_at`
      sortObjectByDate<SkillGroup>(skillGroup, ['skill_group_modified_at'])[0].skill_group_modified_at,
      // Ascending sort of `skillItem` by `skill_item_modified_at`
      sortObjectByDate<SkillItem>(skillItem, ['skill_item_modified_at'])[0].skill_item_modified_at
    ])[0];
  }
}
