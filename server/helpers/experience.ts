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
  public async getNewest(experience: Array<Experience>): Promise<string> {
    // Join each of the modified dates from `experience`
    const tmp = this.joinModifiedAt(experience);
    // Ascending sort of `experience` by `_modified_at`
    tmp.sort(this.compareExperienceDate);
    // Reverse the order so newest is at the beginning
    tmp.reverse();

    return tmp[0];
  }

  /**
   * Join each `_modified_at` field to a single array
   *
   * @param experience - `Array<Experience>`
   * @return `Array<string>`
   */
  public joinModifiedAt(experience: Array<Experience>): Array<string> {
    return experience.map<string>((val: Experience): string => {
      return [
        val.experience_modified_at,
        val.company_modified_at,
        val.position_modified_at
      ].join(',');
    }).join(',').split(',');
  }

  /**
   * Sorts the date of `Experience`
   *
   * @param a - `Experience`
   * @param b - `Experience`
   * @return `1 | -1 | 0`
   */
  public compareExperienceDate(a: string, b: string): 1 | -1 | 0 {
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
