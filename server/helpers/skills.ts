import {
  ISkill,
  ISkillGroup
} from '../models/skill';

/**
 * Helper for skills results from MySQL
 */
export class SkillsHelper {
  /**
   * Current test
   *
   * @param skill - The Skills results
   * @param skillGroup - The Skill Groups results
   */
  public async superme(skill: ISkill[], skillGroup: ISkillGroup[]): Promise<void> {
    // console.log(skill);
    // console.log(skillGroup);
  }
}
