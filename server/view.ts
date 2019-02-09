import { join } from 'path';

/**
 * Sets the View of the Express application.
 */
export class View {
  /**
   * Set the Engine
   * @param app - The `express.Application`
   */
  public set(app: any): void {
    app.set('view engine', 'html');
    app.set('views', join(process.cwd(), 'dist/local/browser'));
  }
}
