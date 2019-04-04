// tslint:disable: unified-signatures
import '../../../key';

declare global {
  interface Array<T> {
    /**
     * Find minimun value of array by Date
     *
     * @returns minimun value
     */
    findMinByDate<S extends T>(): Date;
    /**
     * Find minimun value of array by Date
     *
     * @param path The object path to sort by
     *
     * @returns minimun value
     */
    findMinByDate<S extends T>(path: Array<string>): Date;
  }
}

/**
 * Find minimun value of array by Date
 *
 * @optional @param path The object path to sort by
 *
 * @returns minimun value
 */
function findMinByDate<T>(path?: Array<string>): Date {
  path = path || [];
  return this
    .reduce((pv: T | number, cv: T): T | number | Array<(T | number)> => {
      const pva: number = (pv === Infinity) ? Infinity : new Date(path.key<string>(pv)).getTime();
      const cva: number = new Date(path.key<string>(cv)).getTime();
      return (cva < pva) ? cv : pv;
    }, Infinity);
}

if (!Array.prototype.findMinByDate) {
  Array.prototype.findMinByDate = findMinByDate;
} else {
  console.log('Array.prototype.findMinByDate is already defined - overriding it will be dangerous.');
}

export { };
