declare global {
  /**
   * Key look up for the given object
   *
   * @param path The path to get value from
   *
   * @returns The value of the object path
   */
  interface Array<T> {
    key<S extends T>(object: any): any;
  }
}

/**
 * Key look up for the given object
 *
 * @param path The path to get value from
 *
 * @returns The value of the object path
 */
function key<T>(object: any): any {
  return this.reduce((pv: T, cv: string): any => {
    return (pv && pv[cv]) ? pv[cv] : null;
  }, object);
}

if (!Array.prototype.key) {
  Array.prototype.key = key;
} else {
  console.log('Array.prototype.key is already defined - overriding it will be dangerous.');
}

export { };
