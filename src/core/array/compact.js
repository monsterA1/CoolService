/**
 * @description: 对无效值进行过滤
 * @param args: 可以为数组类型（仅传入一）或者是一定数量的基本数据类型（可传入多个，但不能包含数组和对象）
 * @example: .compact([1,'',2,'a',false]) => [1,2,'a']
 *            .compact(1,'',2,'a',false) => [1,2,'a']
 */
export default function (...args) {
  const _result = [];
  if (args.length < 1) return [];
  const _tmp = args.length === 1 ? args[0] : args;
  _tmp.forEach(item => {
    if (typeof item !== 'object' && (item && true)) {
      _result.push(item);
    }
  });
  return _result;
}