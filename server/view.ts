import * as express from 'express';
import { join } from 'path';

/**
 * Sets the View of the Express application.
 */
export class View {
  /**
   * Set the Engine
   * @param app - The Express Application
   */
  public set(app: express.Application): void {
    app.set('view engine', 'html');
    app.set('views', join(process.cwd(), 'dist/local/browser'));
  }
}
