import { Experience } from '../../types/experience';
import { sortArrayByDate } from '../../helpers/array-sort';

/**
 * Helper for experience results from MySQL
 */
export class ExperienceHelper {
  /**
   * Get the newest entry of `experience`
   *
   * @param experience - `Array<Experience>`
   * @return `Promise<string>`
   */
  public async getNewest(experience: Array<Experience>): Promise<string> {
    // Join each of the modified dates from `experience`
    // Ascending sort of `experience` by `_modified_at`
    return sortArrayByDate<string>(
      experience.map<string>((val: Experience): string => {
        return [
          val.experience_modified_at,
          val.company_modified_at,
          val.position_modified_at
        ].join(',');
      }).join(',').split(',')
    )[0];
  }
}
