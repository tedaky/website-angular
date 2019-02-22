import { VersionModel } from '../models/version';
import { VersionHelper } from '../helpers/version';
import { Version } from '../../types/version';

/**
 * The VersionController of the Express application.
 */
export class VersionController {
  /**
   * Get the Version Results
   *
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getVersionResults(req: any, res: any, next: any): void {
    const versionModel: VersionModel = new VersionModel();
    const versionHelper: VersionHelper = new VersionHelper();

    // version holder
    let version: Array<Version>;
    // versionResponse holder
    let response: Array<Version>;
    // newest header holder
    let newest: Date;

    const render = async (): Promise<void> => { };
    render()
    .then<void, never>(async () => {
      // Get the `version`
      await versionModel.version()
        .then<void, never>((val: Array<Version>): void => {
          response = version = val;
        });
    })
    .then<void, never>(async (): Promise<void> => {
      // Send `version` for newest processing
      await versionHelper.getNewest(version)
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
