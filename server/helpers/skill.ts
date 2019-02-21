import {
  SkillItem,
  SkillGroup,
  SkillGroupItem
} from '../../types/skill';

/**
 * Helper for skills results from MySQL
 */
export class SkillHelper {
  /**
   * JSONify the skill
   *
   * @param skillItem - The Skill Items results
   * @param skillGroup - The Skill Groups results
   * @return `Promise<Array<SkillGroupItem>>`
   */
  public async jsonify(skillItem: Array<SkillItem>, skillGroup: Array<SkillGroup>): Promise<Array<SkillGroupItem>> {
    // Sort the `SkillGroup`s
    skillGroup.sort(this.compareSkillGroupOrder);
    const response: Array<SkillGroupItem> = [];
    for (const tmpSkillGroup of skillGroup) {
      // filter the `SkillItem`s that only match `skill_group_id`
      const tmpSkillItem: Array<SkillItem> = skillItem.filter((val: SkillItem): boolean => {
        return (val.skill_item_skill_group_id === tmpSkillGroup.skill_group_id);
      });
      // Sort the remaining `SkillItem`s
      tmpSkillItem.sort(this.compareSkillOrder);
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
    // newest holder for `skillItem` and `skillGroup`
    const tmp: Array<Date> = [];

    // Ascending sort of `skillGroup` by `skill_group_modified_at`
    skillGroup.sort(this.compareSkillGroupDate);
    // Reverse the order so newest is at the beginning
    skillGroup.reverse();

    // Ascending sort of `skillItem` by `skill_item_modified_at`
    skillItem.sort(this.compareSkillDate);
    // Reverse the order so newest is at the beginning
    skillItem.reverse();

    // Add the newest `skillGroup` and `skillItem` for easy processing
    tmp.push(skillGroup[0].skill_group_modified_at, skillItem[0].skill_item_modified_at);
    // Ascending sort of newest `skillGroup` and newest `skillItem`
    tmp.sort(this.compareNewestDate);
    // Reverse the order so newest is at the beginning
    tmp.reverse();

    return tmp[0];
  }

  /**
   * Sorts the order of the `SkillItem`s
   *
   * @param a - `SkillItem`
   * @param b - `SkillItem`
   * @return `1 | -1 | 0`
   */
  public compareSkillOrder(a: SkillItem, b: SkillItem): 1 | -1 | 0 {
    if (a.skill_item_order > b.skill_item_order) {
      return - 1;
    }
    if (a.skill_item_order > b.skill_item_order) {
      return 1;
    }
    return 0;
  }

  /**
   * Sorts the order of the `SkillGroup`s
   *
   * @param a - `ISkillGroup`
   * @param b - `ISkillGroup`
   * @return `1 | -1 | 0`
   */
  public compareSkillGroupOrder(a: SkillGroup, b: SkillGroup): 1 | -1 | 0 {
    if (a.skill_group_order > b.skill_group_order) {
      return - 1;
    }
    if (a.skill_group_order > b.skill_group_order) {
      return 1;
    }
    return 0;
  }

  /**
   * Sorts the date of the `SkillItems`s
   *
   * @param a - `SkillItem`
   * @param b - `SkillItem`
   * @return `1 | -1 | 0`
   */
  public compareSkillDate(a: SkillItem, b: SkillItem): 1 | -1 | 0 {
    const aDate: Date = new Date(a.skill_item_modified_at);
    const bDate: Date = new Date(b.skill_item_modified_at);
    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }

  /**
   * Sorts the date of the `SkillGroup`s
   *
   * @param a - `SkillGroup`
   * @param b - `SkillGroup`
   * @return `1 | -1 | 0`
   */
  public compareSkillGroupDate(a: SkillGroup, b: SkillGroup): 1 | -1 | 0 {
    const aDate: Date = new Date(a.skill_group_modified_at);
    const bDate: Date = new Date(b.skill_group_modified_at);

    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }

  /**
   * Sorts the date of the newest `SkillGroup` and `SkillItem`
   *
   * @param a - `Date`
   * @param b - `Date`
   * @return `1 | -1 | 0`
   */
  public compareNewestDate(a: Date, b: Date): 1 | -1 | 0 {
    const aDate: Date = new Date(a);
    const bDate: Date = new Date(b);

    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }
}
