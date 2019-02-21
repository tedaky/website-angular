import { EducationModel } from '../models/education';
import { EducationHelper } from '../helpers/education';
import { Education } from '../../types/education';

/**
 * The SkillsController of the Express application.
 */
export class EducationController {
  /**
   * Get the Education Results
   *
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getEducationResults(req: any, res: any, next: any): void {
    const educationModel: EducationModel = new EducationModel();
    const educationHelper: EducationHelper = new EducationHelper();

    // education holder
    let education: Array<Education>;
    // educationResponse holder
    let response: Array<Education>;
    // newest header holder
    let newest: string;

    const render = async (): Promise<void> => { };
    render()
    .then<void, never>(async () => {
      // Get the `education`
      await educationModel.education()
        .then<void, never>((val: Array<Education>): void => {
          response = education = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `education` for newest processing
      await educationHelper.getNewest(education)
        .then<void, never>((val: string): void => {
          newest = val;
        });
    })
    .then<void, never>((): void => {
      // Send
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Last-Modified', newest);
      res.header('Content-Type', 'application/json');
      res.send({ response });
    });
  }
}
