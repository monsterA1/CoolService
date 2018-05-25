import * as _exArray from './core/array/index';

function init (namespace) {
  namespace = Object.assign(_exArray, namespace);
  return namespace;
}

const cs = init({});

export default cs;
