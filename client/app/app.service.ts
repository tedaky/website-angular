import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url: string;
  private origin: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.origin = environment.origin;
    this.origin += 'api/message';
    this.url = this.origin;
  }

  public getMessage(): Observable<Message> {
    return this.httpClient.get<Message>(this.url);
  }
}

export interface Message {
  message_id: number;
  message_description: string;
}
