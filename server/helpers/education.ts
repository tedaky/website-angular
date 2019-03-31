import { Education } from '../../types/education';
import { sortArrayByDate } from '../../helpers/array-sort';

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
  public async getNewest(education: Array<Education>): Promise<string> {
    // Join each of the modified dates from `education`
    // Ascending sort of `education` by `_modified_at`
    return sortArrayByDate<string>(
      education.map<string>((val: Education): string => {
        return [
          val.education_modified_at,
          val.school_modified_at
        ].join(',');
      }).join(',').split(',')
    )[0];
  }
}
