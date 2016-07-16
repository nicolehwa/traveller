import Vue from 'vue';

export default {
    request(method, url, data, success = null, error = null) {
        return Vue.http[method](url, data).then(success).catch(error);
    },

    get(url, success = null, error = null) {
        return this.request('get', url, {}, success, error);
    },

    post(url, data, success = null, error = null) {
        return this.request('post', url, data, success, error);
    },

    put(url, data, success = null, error = null) {
        return this.request('put', url, data, success, error);
    },

    delete(url, data = {}, success = null, error = null) {
        return this.request('delete', url, data, success, error);
    }
};
