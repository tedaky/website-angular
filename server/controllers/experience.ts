import { ExperienceModel } from '../models/experience';
import { ExperienceHelper } from '../helpers/experience';
import { Experience } from '../../types/experience';

/**
 * The ExperienceController of the Express application.
 */
export class ExperienceController {
  /**
   * Get the Experiences Results
   *
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getExperienceResults(req: any, res: any, next: any): void {
    const experienceModel: ExperienceModel = new ExperienceModel();
    const experienceHelper: ExperienceHelper = new ExperienceHelper();

    // experienceResponse holder
    let response: Array<Experience>;
    // newest header holder
    let newest: string;

    const render = async (): Promise<void> => { };
    render()
    .then<void, never>(async () => {
      // Get the `experience`
      await experienceModel.experience()
        .then<void, never>((val: Array<Experience>): void => {
          response = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `experience` for newest processing
      await experienceHelper.getNewest(response.slice(0))
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
