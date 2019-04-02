// tslint:disable: unified-signatures
import { key } from '../../../object/key';

declare global {
  interface Array<T> {
    /**
     * Sort an array in string format
     *
     * @returns input array in sorted order
     */
    sortByString<S extends T>(): this;
    /**
     * Sort an array in string format
     *
     * @param path The object path to sort by
     *
     * @returns input array in sorted order
     */
    sortByString<S extends T>(path: Array<string>): this;
  }
}

/**
 * Sort an array in string format
 *
 * @optional @param path The object path to sort by
 *
 * @returns input array in sorted order
 */
function sortByString<T>(path?: Array<string>): Array<T> {
  path = path ? path : [];
  return this.sort((a: T, b: T): 1 | -1 | 0 => {
    const aos = key<T>(path, a);
    const bos = key<T>(path, b);
    return (aos < bos) ? - 1 : (aos > bos) ? 1 : 0;
  });
}

if (Array.prototype.sortByString) {
  throw (new Error('Array.prototype.sortByString is already defined - overriding it will be dangerous.'));
}

Array.prototype.sortByString = sortByString;

export { };
