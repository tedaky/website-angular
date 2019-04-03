// tslint:disable: unified-signatures
import '../../key';

declare global {
  interface Array<T> {
    /**
     * Sort an array in Date format
     *
     * @returns input array in sorted order
     */
    sortByDate<S extends T>(): this;
    /**
     * Sort an array in Date format
     *
     * @param path The object path to sort by
     *
     * @returns input array in sorted order
     */
    sortByDate<S extends T>(path: Array<string>): this;
  }
}

/**
 * Sort an array of objects in date format
 *
 * @optional @param path The object path to sort by
 *
 * @returns input array in sorted order
 */
function sortByDate<T>(path?: Array<string>): Array<T> {
  path = path || [];
  return this.sort((a: T, b: T): number => {
    return new Date(path.key<string>(a)).getTime() - new Date(path.key<string>(b)).getTime();
  });
}

if (!Array.prototype.sortByDate) {
  Array.prototype.sortByDate = sortByDate;
} else {
  console.log('Array.prototype.sortByDate is already defined - overriding it will be dangerous.');
}

export { };
