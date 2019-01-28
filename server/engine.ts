import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

/**
 * Sets the Engine of the Express application.
 */
export class Engine {
  /**
   * Set the Engine
   * @param app - The Express Application {express.Application}
   */
  public set(app: any): void {
    // Requires successful build of Angular to get the AppServerModuleNgFactory and LAZY_MODULE_MAP
    const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/local/server/main');

    // Uses the successful build of Angular to set the Engine
    app.engine('html', ngExpressEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    }));
  }
}
