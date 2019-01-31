import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/message';
  }

  public getMessage(): Observable<Message> {
    return this.httpClient.get<Message>(this.url);
  }
}

export interface Message {
  message_id: number;
  message_description: string;
}
