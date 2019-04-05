// tslint:disable: unified-signatures
import '../../../key';

declare global {
  interface Array<T> {
    /**
     * Find maximun value of array by Number
     *
     * @returns maximum value of array
     */
    findMaxByNumber<S extends T>(): number;
    /**
     * Find maximun value of array by Number
     *
     * @param path The object path to find
     *
     * @returns maximum value of array
     */
    findMaxByNumber<S extends T>(path: Array<string>): number;
  }
}

/**
 * Find maximun value of array by Number
 *
 * @optional @param path The object path to find
 *
 * @returns maximum value of array
 */
function findMaxByNumber<T>(path?: Array<string>): number {
  path = path || [];
  return this
    .map((el: T): T => {
      return el;
    })
    .reduce((pv: T | number, cv: T): T | number | Array<(T | number)> => {
      const pva: number = path.key<string>(pv);
      const cva: number = path.key<string>(cv);
      return (cva < pva) ? cv : pv;
    }, Infinity);
}

if (!Array.prototype.findMaxByNumber) {
  Array.prototype.findMaxByNumber = findMaxByNumber;
} else {
  console.log('Array.prototype.findMaxByNumber is already defined - overriding it will be dangerous.');
}

export { };
