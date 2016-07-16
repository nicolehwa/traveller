import ls from 'local-storage';

export default {
  get(key) {
    return ls(key);
  },

  set(key, value) {
    return ls(key, value);
  },

  remove(key) {
    return ls.remove(key);
  }
};
