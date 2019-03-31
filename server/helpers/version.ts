import { Version } from '../../types/version';
import { sortObjectByDate } from '../../helpers/object-sort';

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
    return sortObjectByDate<Version>(version, ['version_modified_at'])[0].version_modified_at;
  }
}
