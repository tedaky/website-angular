import '../../helpers/array/sort/by/date';
import { Version } from '../../types/version';

/**
 * Helper for version results from MySQL
 */
export class VersionHelper {
  /**
   * Get the newest entry of `version`
   *
   * @param version - `Array<Version>`
   *
   * @return `Promise<Date>`
   */
  public async getNewest(version: Array<Version>): Promise<Date> {
    // Ascending sort of `version` by `_modified_at`
    return version.sortByDate<Version>(['version_modified_at'])[0].version_modified_at;
  }
}
