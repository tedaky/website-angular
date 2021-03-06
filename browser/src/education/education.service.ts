import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  distinctUntilChanged,
  timeout
} from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Response } from '../../../types/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  /**
   * URL Holder
   */
  private _url: string;
  /**
   * Get API URL
   */
  private get url(): string {
    return this._url;
  }
  /**
   * Set API URL
   */
  private set url(val: string) {
    this._url = val;
  }

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/education';
  }

  /**
   * Get the experience from server API
   *
   * @returns `Observable<Response>`
   */
  public get education(): Observable<Response> {
    return this.httpClient.get<Response>(this.url)
      .pipe<Response>(timeout<Response>(4000))
      .pipe<Response>(distinctUntilChanged<Response>());
  }
}
