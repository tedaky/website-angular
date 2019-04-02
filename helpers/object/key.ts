/**
 * Key look up for the given object
 *
 * @param path The object path
 * @param object The object
 *
 * @returns The value of the object path
 */
export function key<T>(path: Array<string>, object: T): any {
  return path.reduce<any>((xs: T, x: string): any => {
    return (xs && xs[x]) ? xs[x] : null;
  }, object);
}
