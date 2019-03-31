/**
 * Key look up for the given object
 *
 * @param path The object path
 * @param object The object
 *
 * @returns The value of the object path
 */
function key<T>(path: Array<string>, object: T): any {
  return path.reduce<any>((xs: T, x: string): any => {
    return (xs && xs[x]) ? xs[x] : null;
  }, object);
}

/**
 * Sort an array of objects in number or string format
 *
 * @param array The array of objects to sort
 * @param sorter The object parameter to sort by
 *
 * @returns input array in sorted order
 */
export function sortObject<T>(array: Array<T>, sorter: Array<string>): Array<T> {
  return array.sort((a: T, b: T): 1 | -1 | 0 => {
    const aos = key<T>(sorter, a);
    const bos = key<T>(sorter, b);
    return (aos < bos) ? - 1 : (aos > bos) ? 1 : 0;
  });
}

/**
 * Sort an array of objects in date format
 *
 * @param array The array of objects to sort
 * @param sorter The object parameter to sort by
 *
 * @returns input array in sorted order
 */
export function sortObjectByDate<T>(array: Array<T>, sorter: Array<string>): Array<T> {
  return array.sort((a: T, b: T): 1 | -1 | 0 => {
    const aDate: Date = new Date(key<T>(sorter, a));
    const bDate: Date = new Date(key<T>(sorter, b));
    return (aDate < bDate) ? - 1 : (aDate > bDate) ? 1 : 0;
  });
}

/**
 * Sort an array of objects randomly
 *
 * @param array The array of objects to sort
 *
 * @returns input array in random sorted order
 */
export function sortObjectRandom<T>(array: Array<T>): Array<T> {
  return array.sort((): number => {
    return 0.5 - Math.random();
  });
}
