import '../../helpers/array/sort/by/date';
import '../../helpers/array/find/max/by/date';
import { Experience } from '../../types/experience';

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
  public async getNewest(experience: Array<Experience>): Promise<Date> {
    // Join each of the modified dates from `experience`
    return experience
      .reduce((pv: Array<Date>, cv: Experience): Array<Date> => {
        return [
          ...pv,
          cv.experience_modified_at,
          cv.company_modified_at,
          cv.position_modified_at
        ];
      }, [])
      // Ascending sort of `experience` by `_modified_at`
      .findMaxByDate<Date>();
  }
}
