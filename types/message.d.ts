export interface Message {
  message_id: number;
  message_description: string;
  message_modified_at: Date;
}

export interface Response {
  response: Array<Message>;
}
