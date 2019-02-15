import { SkillsModel } from '../models/skills';
import { SkillsHelper } from '../helpers/skills';
import {
  ISkillGroup,
  ISkill
} from '../models/skill';

/**
 * The SkillsController of the Express application.
 */
export class SkillsController {
  /**
   * Get the Skills and Skill Groups Results
   *
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getSkillResults(req: any, res: any, next: any): void {
    const skillsModel: SkillsModel = new SkillsModel();
    const skillsHelper: SkillsHelper = new SkillsHelper();

    // skill holder
    let skill: ISkill[];
    // skillGroup holder
    let skillGroup: ISkillGroup[];

    // Promise skills
    const skillAsync: Promise<ISkill[]> = new Promise((resolve: any, reject: any): void => {
      resolve(skillsModel.skill());
    });
    // Promise Skill Groups
    const skillGroupAsync: Promise<ISkillGroup[]> = new Promise((resolve: any, reject: any): void => {
      resolve(skillsModel.skillGroup());
    });

    async function x(): Promise<void> {
      // Get the skills
      await skillAsync.then<void, never>((val: ISkill[]): void => {
        skill = val;
      })
      .then<void, never>(async (): Promise<void> => {
        // Get the Skill Groups
        await skillGroupAsync.then((val: ISkillGroup[]): void => {
          skillGroup = val;
        });
      })
      .then<void, never>(async (): Promise<void> => {
        // Send Skill Groups and Skills for processing
        await skillsHelper.superme(skill, skillGroup);
      })
      .then<void, never>((): void => {
        // Send
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Last-Modified', (skillGroup[0].skill_group_modified_at).toString());
        res.header('Content-Type', 'application/json');
        res.send({
          skill: skill,
          skill_group: skillGroup
        });
      });
    }
    x();
  }
}
