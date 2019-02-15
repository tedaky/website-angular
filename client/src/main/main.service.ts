import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  /**
   * API URL
   */
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/messages';
  }

  /**
   * Get the message from server API
   *
   * @returns `Observable<Message>`
   */
  public getMessage(): Observable<MessagesResponse> {
    return this.httpClient.get<MessagesResponse>(this.url);
  }
}

/**
 * Message contains the `message_id` and `message_description`
 *
 * Additional information from the response is `message_modified_at`
 */
export interface Message {
  message_id: number;
  message_description: string;
  message_modified_at?: Date;
}

/**
 * MessageResponse contains an array of `Message`
 */
export interface MessagesResponse {
  message: Message[];
}
