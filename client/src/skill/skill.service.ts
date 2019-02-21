import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Response } from '../../../types/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  /**
   * API URL
   */
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.origin + 'api/skills';
  }

  /**
   * Get the Response from server API
   *
   * @returns `Observable<Response>`
   */
  public getSkills(): Observable<Response> {
    return this.httpClient.get<Response>(this.url);
  }
}
