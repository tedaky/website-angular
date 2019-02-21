import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Response } from '../../../types/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  /**
   * API URL
   */
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/experiences';
  }

  /**
   * Get the experience from server API
   *
   * @returns `Observable<Response>`
   */
  public getExperiences(): Observable<Response> {
    return this.httpClient.get<Response>(this.url);
  }
}
