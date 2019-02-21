import { MessageModel } from '../models/message';
import { Message } from '../../types/message';

/**
 * The MessageController of the Express application.
 */
export class MessageController {
  /**
   * Get the Message
   * @param req - The Request `NextFunction`
   * @param res - The `Response`
   * @param next - Move to the Next route `Request`
   */
  public getMessages(req: any, res: any, next: any): void {
    const messageModel: MessageModel = new MessageModel();

    // message holder
    let message: Array<Message>;

    const render = async (): Promise<void> => {};
    render()
    .then<void, never>(async () => {
      // Get the message
      await messageModel.message()
        .then<void, never>((val: Array<Message>): void => {
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
