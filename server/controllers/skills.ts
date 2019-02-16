import { SkillsModel } from '../models/skills';
import { SkillsHelper } from '../helpers/skills';
import {
  ISkill,
  ISkillGroup,
  ISkillResponse
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
    // skillResponse holder
    let response: ISkillResponse[];
    // newest header holder
    let newest: Date;

    const render = async (): Promise<void> => {};
    render()
    .then<void, never>(async () => {
      // Get the skills
      await skillsModel.skill()
        .then<void, never>((val: ISkill[]): void => {
          skill = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Get the `skillGroup`
      await skillsModel.skillGroup()
        .then<void, never>((val: ISkillGroup[]): void => {
          skillGroup = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `skill` and `skillGroup` for `JSON` processing
      await skillsHelper.jsonify(skill, skillGroup)
        .then<void, never>((val: ISkillResponse[]): void => {
          response = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `skill` and `skillGroup` for newest processing
      await skillsHelper.getNewest(skill, skillGroup)
        .then<void, never>((val: Date): void => {
          newest = val;
        });
    })
    .then<void, never>((): void => {
      // Send
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Last-Modified', newest.toString());
      res.header('Content-Type', 'application/json');
      res.send({ response });
    });
  }
}
