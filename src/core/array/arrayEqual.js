/**
 * @description: 数组扩展方法arrayEqual
 * @param {Array} arr1 arr2
 * @example
 */
export default function (arr1, arr2) {
  if (arr1 === arr2) { return true; }
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0, l = arr1.length; i < l; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
