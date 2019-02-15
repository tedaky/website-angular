import { join } from 'path';

import { MessagesController } from './controllers/messages';
import { SkillsController } from './controllers/skills';
import { AngularController } from './controllers/angular';

/**
 * Sets the Routes of the Express application.
 */
export class Routes {
  /**
   * Set the Engine
   *
   * @param app - The `express.Application`
   * @param exp - The `core.Express`
   */
  public set(app: any, exp: any): void {
    /**
     * Create the `MessageController`
     */
    const messagesController: MessagesController = new MessagesController();
    // Message route
    app.route('/api/messages')
      .get(messagesController.getMessages);

    /**
     * Create the `MessageController`
     */
    const skillsController: SkillsController = new SkillsController();
    // skills route
    app.route('/api/skills')
      .get(skillsController.getSkillResults);

    // Server static files from /browser
    app.route('*.*')
      .get(exp.static(join(process.cwd(), 'dist/local/browser')));

    /**
     * Create the `AngularController`
     */
    const angularController: AngularController = new AngularController();
    // All regular routes use the Universal engine
    app.route('*')
      .get(angularController.getAngular);

    // app.route('/')
    //   .get((req: Request, res: Response): void => {
    //     res.status(200).send({
    //       message: 'GET request successfulll!!!!'
    //     });
    //   });

    // // Contact
    // app.route('/contact')
    //   // GET endpoint
    //   .get((req: Request, res: Response): void => {
    //     // Get all contacts
    //     res.status(200).send({
    //       message: 'GET request successfulll!!!!'
    //     });
    //   })
    //   // POST endpoint
    //   .post((req: Request, res: Response): void => {
    //     // Create new contact
    //     res.status(200).send({
    //       message: 'POST request successfulll!!!!'
    //     });
    //   });

    // // Contact detail
    // app.route('/contact/:contactId')
    //   // get specific contact
    //   .get((req: Request, res: Response): void => {
    //     // Get a single contact detail
    //     res.status(200).send({
    //       message: 'GET request successfulll!!!!'
    //     });
    //   })
    //   .put((req: Request, res: Response): void => {
    //     // Update a contact
    //     res.status(200).send({
    //       message: 'PUT request successfulll!!!!'
    //     });
    //   })
    //   .delete((req: Request, res: Response): void => {
    //     // Delete a contact
    //     res.status(200).send({
    //       message: 'DELETE request successfulll!!!!'
    //     });
    //   });
  }
}
