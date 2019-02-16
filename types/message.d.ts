export interface IMessageResponse {
  message_id: number;
  message_description: string;
  message_modified_at: Date;
}

export interface MessageResponse {
  response: IMessageResponse[];
}
