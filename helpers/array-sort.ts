
/**
 * Sort an array in date format
 *
 * @param array The array to sort
 *
 * @returns input array in sorted order
 */
export function sortArrayByDate<T>(array: Array<T>): Array<T> {
  return array.sort((a: T, b: T): 1 | -1 | 0 => {
    const aDate: Date = new Date(a.toString());
    const bDate: Date = new Date(b.toString());
    return (aDate < bDate) ? - 1 : (aDate > bDate) ? 1 : 0;
  });
}

/**
 * Sort an array in number format
 *
 * @param array The array to sort
 *
 * @returns input array in sorted order
 */
export function sortArrayByNumber<T>(array: Array<T>): Array<T> {
  return array.sort((a: T, b: T): 1 | -1 | 0 => {
    return (a < b) ? - 1 : (a > b) ? 1 : 0;
  });
}

/**
 * Sort an array in string format
 *
 * @param array The array to sort
 *
 * @returns input array in sorted order
 */
export function sortArrayByString<T>(array: Array<T>): Array<T> {
  return array.sort((a: T, b: T): 1 | -1 | 0 => {
    return (a < b) ? - 1 : (a > b) ? 1 : 0;
  });
}

/**
 * Sort an array randomly
 *
 * @param array The array to sort
 *
 * @returns input array in random sorted order
 */
export function sortArrayRandom<T>(array: Array<T>): Array<T> {
  return array.sort((): number => {
    return 0.5 - Math.random();
  });
}
