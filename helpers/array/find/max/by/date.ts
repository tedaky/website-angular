// tslint:disable: unified-signatures
import '../../../key';

declare global {
  interface Array<T> {
    /**
     * Find maximun value of array by Date
     *
     * @returns maximum value
     */
    findMaxByDate<S extends T>(): Date;
    /**
     * Find maximun value of array by Date
     *
     * @param path The object path to sort by
     *
     * @returns maximum value
     */
    findMaxByDate<S extends T>(path: Array<string>): Date;
  }
}

/**
 * Find maximun value of array by Date
 *
 * @optional @param path The object path to sort by
 *
 * @returns maximum value
 */
function findMaxByDate<T>(path?: Array<string>): Date {
  path = path || [];
  return this
    .reduce((pv: T | number, cv: T): T | number | Array<(T | number)> => {
      const pva: number = (pv === -Infinity) ? -Infinity : new Date(path.key<string>(pv)).getTime();
      const cva: number = new Date(path.key<string>(cv)).getTime();
      return (cva > pva) ? cv : pv;
    }, -Infinity);
}

if (!Array.prototype.findMaxByDate) {
  Array.prototype.findMaxByDate = findMaxByDate;
} else {
  console.log('Array.prototype.findMaxByDate is already defined - overriding it will be dangerous.');
}

export { };
