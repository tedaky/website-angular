import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Response } from '../../../types/message';

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
   * @returns `Observable<Response>`
   */
  public getMessage(): Observable<Response> {
    return this.httpClient.get<Response>(this.url);
  }
}
