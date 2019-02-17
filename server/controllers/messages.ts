import { MessagesModel } from '../models/messages';
import { IMessageResponse } from '../../types/message';

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

    // message holder
    let message: IMessageResponse[];

    const render = async (): Promise<void> => {};
    render()
    .then<void, never>(async () => {
      // Get the message
      await messagesModel.message()
        .then<void, never>((val: IMessageResponse[]): void => {
          message = val;
        });
    })
    .then<void, never>((): void => {
      // Send
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Last-Modified', (message[0].message_modified_at).toString());
      res.header('Content-Type', 'application/json');
      res.send({
        response: message
      });
    });
  }
}
