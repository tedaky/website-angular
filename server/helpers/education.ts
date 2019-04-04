import '../../helpers/array/sort/by/date';
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
  public async getNewest(education: Array<Education>): Promise<string> {
    // Join each of the modified dates from `education`
    return education.map<string>((val: Education): string => {
      return [
        val.education_modified_at,
        val.school_modified_at
      ].join(',');
    }).join(',').split(',')
    // Ascending sort of `education` by `_modified_at`
    .sortByDate<string>()[0];
  }
}
