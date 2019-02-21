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
    const tmp = this.joinModifiedAt(education);
    // Ascending sort of `education` by `_modified_at`
    tmp.sort(this.compareEducationDate);
    // Reverse the order so newest is at the beginning
    tmp.reverse();

    return tmp[0];
  }

  /**
   * Join each `_modified_at` field to a single array
   *
   * @param education - `Array<Education>`
   * @return `Array<string>`
   */
  public joinModifiedAt(education: Array<Education>): Array<string> {
    return education.map<string>((val: Education): string => {
      return [
        val.education_modified_at,
        val.school_modified_at
      ].join(',');
    }).join(',').split(',');
  }

  /**
   * Sorts the date of `Education`
   *
   * @param a - `Education`
   * @param b - `Education`
   * @return `1 | -1 | 0`
   */
  public compareEducationDate(a: string, b: string): 1 | -1 | 0 {
    const aDate: Date = new Date(a);
    const bDate: Date = new Date(b);
    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }
}
