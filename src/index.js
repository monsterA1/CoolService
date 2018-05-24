import * as _ex_array from './core/array/index'

function init (namespace) {
  namespace = Object.assign(_ex_array, namespace);
  return namespace
}

const cs = init({});

export default cs