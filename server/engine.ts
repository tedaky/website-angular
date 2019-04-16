import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Sets the Engine of the Express application.
 */
export class Engine {
  /**
   * Set the Engine
   * @param app - The `express.Application`
   */
  public set(app: any): void {
    // Requires successful build of Angular to get the AppServerModuleNgFactory and LAZY_MODULE_MAP
    const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main');

    /**
     * Create the template from the `index.html` file
     */
    const template: string = readFileSync(join(process.cwd(), 'dist/browser', 'index.html')).toString();

    // Uses the successful build of Angular to set the Engine
    app.engine('html', (_: any, options: any, callback: any): void => {
      renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [
          provideModuleMap(LAZY_MODULE_MAP)
        ]
      }).then((html: string): void => {
        callback(null, html);
      });
    });
  }
}
