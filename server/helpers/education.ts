import '../../helpers/array/sort/by/date';
import '../../helpers/array/find/max/by/date';
import { Education } from '../../types/education';

/**
 * Helper for education results from MySQL
 */
export class EducationHelper {
  /**
   * Get the newest entry of `education`
   *
   * @param education - `Array<Education>`
   * @return `Promise<string>`
   */
  public async getNewest(education: Array<Education>): Promise<Date> {
    // Join each of the modified dates from `education`
    return education
      .reduce((pv: Array<Date>, cv: Education): Array<Date> => {
        return [
          ...pv,
          cv.education_modified_at,
          cv.school_modified_at
        ];
      }, [])
      // Ascending sort of `education` by `_modified_at`
      .findMaxByDate<Date>();
  }
}
