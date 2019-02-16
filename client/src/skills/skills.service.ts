import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { SkillResponse } from '../../../types/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

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
   * Get the message from server API
   *
   * @returns `Observable<SkillsResponse>`
   */
  public getSkills(): Observable<SkillResponse> {
    return this.httpClient.get<SkillResponse>(this.url);
  }
}
