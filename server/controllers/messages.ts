import { MessagesModel } from '../models/messages';
import { IMessage } from '../models/message';

/**
 * The MessageController of the Express application.
 */
export class MessagesController {
  /**
   * Get the Message
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getMessages(req: any, res: any, next: any): void {
    const messagesModel: MessagesModel = new MessagesModel();

    // skill holder
    let message: IMessage[];

    // Promise skills
    const messageAsync: Promise<IMessage[]> = new Promise((resolve: any, reject: any): void => {
      resolve(messagesModel.message());
    });

    const render = async (): Promise<void> => {};
    render()
    .then<void, never>(async () => {
      // Get the skills
      await messageAsync.then<void, never>((val: IMessage[]): void => {
        message = val;
      });
    })
    .then<void, never>((): void => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Last-Modified', (message[0].message_modified_at).toString());
      res.header('Content-Type', 'application/json');
      res.send({
        message: message
      });
    });
  }
}
