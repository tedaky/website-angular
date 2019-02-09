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
    this.url = environment.origin + 'api/message';
  }

  /**
   * Get the message from server API
   *
   * @returns `Observable<Message>`
   */
  public getMessage(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.url);
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
}
