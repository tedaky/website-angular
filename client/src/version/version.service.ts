import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Response } from '../../../types/version';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  /**
   * API URL
   */
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/versions';
  }

  /**
   * Get the experience from server API
   *
   * @returns `Observable<Response>`
   */
  public getVersions(): Observable<Response> {
    return this.httpClient.get<Response>(this.url);
  }
}
