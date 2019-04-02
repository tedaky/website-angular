declare global {
  interface Array<T> {
    /**
     * Sort an array randomly
     *
     * @returns input array in random sorted order
     */
    sortByRandom<S extends T>(): this;
  }
}

/**
 * Sort an array randomly
 *
 * @returns input array in random sorted order
 */
function sortByRandom<T>(): Array<T> {
  return this.sort((): number => {
    return 0.5 - Math.random();
  });
}

if (Array.prototype.sortByRandom) {
  throw (new Error('Array.prototype.sortByRandom is already defined - overriding it will be dangerous.'));
}

Array.prototype.sortByRandom = sortByRandom;

export { };
