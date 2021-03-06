import { join } from 'path';

import { MessageController } from './controllers/message';
import { SkillController } from './controllers/skill';
import { ExperienceController } from './controllers/experience';
import { EducationController } from './controllers/education';
import { VersionController } from './controllers/version';
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
    const messageController: MessageController = new MessageController();
    // Message route
    app.route('/api/messages')
      .get(messageController.getMessages);

    /**
     * Create the `SkillController`
     */
    const skillController: SkillController = new SkillController();
    // skills route
    app.route('/api/skills')
      .get(skillController.getSkillResults);

    /**
     * Create the `ExperienceController`
     */
    const experienceController: ExperienceController = new ExperienceController();
    // experiences route
    app.route('/api/experiences')
      .get(experienceController.getExperienceResults);

    /**
     * Create the `EducationController`
     */
    const educationController: EducationController = new EducationController();
    // education route
    app.route('/api/education')
      .get(educationController.getEducationResults);

    /**
     * Create the `VersionController`
     */
    const versionController: VersionController = new VersionController();
    // versions route
    app.route('/api/versions')
      .get(versionController.getVersionResults);

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
