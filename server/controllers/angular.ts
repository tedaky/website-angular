import { join } from 'path';

/**
 * The AngularController of the Express application.
 */
export class AngularController {
  /**
   * Set the Engine
   * @param req - The Request {NextFunction}
   * @param res - The Response {Response}
   * @param next - Move to the Next route {Request}
   */
  public getAngular(req: any, res: any, next: any): void {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).render(join(process.cwd(), 'dist/local/browser', 'index.html'), { req });
  }
}
