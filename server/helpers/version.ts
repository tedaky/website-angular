import { Version } from '../../types/version';

/**
 * Helper for version results from MySQL
 */
export class VersionHelper {
  /**
   * Get the newest entry of `version`
   *
   * @param version - `Array<Version>`
   * @return `Promise<string>`
   */
  public async getNewest(version: Array<Version>): Promise<Date> {
    // Ascending sort of `version` by `_modified_at`
    version.sort(this.compareVersionDate);
    // Reverse the order so newest is at the beginning
    version.reverse();

    return version[0].version_modified_at;
  }

  /**
   * Sorts the date of `Version`
   *
   * @param a - `Version`
   * @param b - `Version`
   * @return `1 | -1 | 0`
   */
  public compareVersionDate(a: Version, b: Version): 1 | -1 | 0 {
    const aDate: Date = new Date(a.version_modified_at);
    const bDate: Date = new Date(b.version_modified_at);
    if (aDate > bDate) {
      return - 1;
    }
    if (aDate > bDate) {
      return 1;
    }
    return 0;
  }
}
