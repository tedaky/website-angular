// tslint:disable: unified-signatures
import { key } from '../../../object/key';

declare global {
  interface Array<T> {
    /**
     * Sort an array in number format
     *
     * @returns input array in sorted order
     */
    sortByNumber<S extends T>(): this;
    /**
     * Sort an array in number format
     *
     * @param path The object path to sort by
     *
     * @returns input array in sorted order
     */
    sortByNumber<S extends T>(path: Array<string>): this;
  }
}

/**
 * Sort an array in number format
 *
 * @optional @param path The object path to sort by
 *
 * @returns input array in sorted order
 */
function sortByNumber<T>(path?: Array<string>): Array<T> {
  path = path ? path : [];
  return this.sort((a: T, b: T): number => {
    return key<T>(path, a) - key<T>(path, b);
  });
}

if (Array.prototype.sortByNumber) {
  throw (new Error('Array.prototype.sortByNumber is already defined - overriding it will be dangerous.'));
}

Array.prototype.sortByNumber = sortByNumber;

export { };
