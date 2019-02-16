import {
  ISkill,
  ISkillGroup,
  ISkillResponse
} from '../models/skill';

/**
 * Helper for skills results from MySQL
 */
export class SkillsHelper {
  /**
   * JSONify the skills
   *
   * @param skill - The Skills results
   * @param skillGroup - The Skill Groups results
   * @return `Promise<ISkillResponse[]>`
   */
  public async jsonify(skill: ISkill[], skillGroup: ISkillGroup[]): Promise<ISkillResponse[]> {
    // Sort the `SkillGroup`s
    skillGroup.sort(this.compareSkillGroupOrder);
    const response: ISkillResponse[] = [];
    for (const tmpSkillGroup of skillGroup) {
      // filter the `Skill`s that only match `skill_group_id`
      const tmpSkill: ISkill[] = skill.filter((val: ISkill): boolean => {
        return (val.skill_skill_group_id === tmpSkillGroup.skill_group_id);
      });
      // Sort the remaining `Skill`s
      tmpSkill.sort(this.compareSkillOrder);
      // Add the result to the response
      response.push({
        skill_group: tmpSkillGroup,
        skill: tmpSkill
      });
    }
    return response;
  }

  /**
   * Get the newest entry of `skill` and `skill_group`
   *
   * @param skill - `ISkill[]`
   * @param skillGroup - `ISkillGroup[]`
   * @return `Promise<Date>`
   */
  public async getNewest(skill: ISkill[], skillGroup: ISkillGroup[]): Promise<Date> {
    // newest holder for `skillGroup` and `skill`
    const tmp: Date[] = [];

    // Ascending sort of `skillGroup` by `skill_group_modified_at`
    skillGroup.sort(this.compareSkillGroupDate);
    // Reverse the order so newest is at the beginning
    skillGroup.reverse();

    // Ascending sort of `skill` by `skill_modified_at`
    skill.sort(this.compareSkillDate);
    // Reverse the order so newest is at the beginning
    skill.reverse();

    // Add the newest `skillGroup` and `skill` for easy processing
    tmp.push(skillGroup[0].skill_group_modified_at, skill[0].skill_modified_at);
    // Ascending sort of newest `skillGroup` and newest `skill`
    tmp.sort(this.compareNewestDate);
    // Reverse the order so newest is at the beginning
    tmp.reverse();

    return tmp[0];
  }

  /**
   * Sorts the order of the `Skill`s
   *
   * @param a - `ISkill`
   * @param b - `ISkill`
   * @return `1 | -1 | 0`
   */
  public compareSkillOrder(a: ISkill, b: ISkill): 1 | -1 | 0 {
    if (a.skill_order > b.skill_order) {
      return - 1;
    }
    if (a.skill_order > b.skill_order) {
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
  public compareSkillGroupOrder(a: ISkillGroup, b: ISkillGroup): 1 | -1 | 0 {
    if (a.skill_group_order > b.skill_group_order) {
      return - 1;
    }
    if (a.skill_group_order > b.skill_group_order) {
      return 1;
    }
    return 0;
  }

  public compareSkillDate(a: ISkill, b: ISkill): 1 | -1 | 0 {
    const aDate: Date = new Date(a.skill_modified_at);
    const bDate: Date = new Date(b.skill_modified_at);
    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }

  public compareSkillGroupDate(a: ISkillGroup, b: ISkillGroup): 1 | -1 | 0 {
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
