import http from './http';
import ls from './ls';

export default {
    username: '',
    name: '',
    role: '',


    init(data) {
        this.username = data.username;
        this.role = data.role;
        this.name = data.name
    },

    destroy() {
      this.username = '';
      this.role = '';
      this.name = '';
    },

    logout() {
      let username = ls.get('username');
      if(username) {
            this.destroy();
            ls.remove('username');
            return location.reload();
        
      }
    }
}
