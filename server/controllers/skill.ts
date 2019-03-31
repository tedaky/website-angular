import { SkillModel } from '../models/skill';
import { SkillHelper } from '../helpers/skill';
import {
  SkillItem,
  SkillGroup,
  SkillGroupItem
} from '../../types/skill';

/**
 * The SkillsController of the Express application.
 */
export class SkillController {
  /**
   * Get the Skill Items and Skill Groups Results
   *
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getSkillResults(req: any, res: any, next: any): void {
    const skillsModel: SkillModel = new SkillModel();
    const skillsHelper: SkillHelper = new SkillHelper();

    // skillItem holder
    let skillItem: Array<SkillItem>;
    // skillGroup holder
    let skillGroup: Array<SkillGroup>;
    // skillResponse holder
    let response: Array<SkillGroupItem>;
    // newest header holder
    let newest: Date;

    const render = async (): Promise<void> => { };
    render()
    .then<void, never>(async () => {
      // Get the `skillItem`
      await skillsModel.skillItem()
        .then<void, never>((val: Array<SkillItem>): void => {
          skillItem = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Get the `skillGroup`
      await skillsModel.skillGroup()
        .then<void, never>((val: Array<SkillGroup>): void => {
          skillGroup = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `skillItem` and `skillGroup` for `JSON` processing
      await skillsHelper.jsonify(skillItem.slice(0), skillGroup.slice(0))
        .then<void, never>((val: Array<SkillGroupItem>): void => {
          response = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `skillItem` and `skillGroup` for newest processing
      await skillsHelper.getNewest(skillItem.slice(0), skillGroup.slice(0))
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
