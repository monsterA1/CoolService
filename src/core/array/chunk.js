/**
 * @description: 数组扩展方法chunk
 * @param {Array} arr 
 * @param {Number} len
 * @example: .chunk([1,2,3,4], 2) => return [[1,2],[3,4]]
 */
export default function(arr, len) {
  if (!Array.isArray(arr) || (typeof len !== 'number' && len < 0)) return [];
  if (len === 0) return arr;
  const _array = new Array(Math.ceil(arr.length / len));
  for (let i = 0, length = _array.length; i < length; i++) {
    _array[i] = arr.splice(0, len);
  }
  return _array;
}