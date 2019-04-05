import '../key';

declare global {
  /**
   * Key look up for the given object
   *
   * @param path The path to get value from
   *
   * @returns The value of the object path
   */
  interface Array<T> {
    groupBy<S extends T, U>(object: any): U;
  }
}

/**
 * Key look up for the given object
 *
 * @param path The path to get value from
 *
 * @returns The value of the object path
 */
function groupBy<T, S>(path: Array<string>): S {
  return this
    .map((el: T): T => {
      return el;
    })
    .reduce((pv: S, cv: T): S => {
      const key: any = path.key<string>(cv);
      (pv[key]) ? pv[key].push(cv) : pv[key] = [];
      return pv;
    }, {});
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = groupBy;
} else {
  console.log('Array.prototype.groupBy is already defined - overriding it will be dangerous.');
}

export { };
