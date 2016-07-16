<template>
 <div class="content">
   <div class="container-fluid">
       <div class="row auth longer">
           <div class="col-md-5">
               <div class="card">
                  <div class="header text-center">
                      <h2 style="margin-top: 0">Traveller</h2>
                  </div>
                  <div class="content text-center" style="min-height: 100px; background-color: rgba(203, 203, 210, 0.15);">
                    <div class="row auth">
                      <div class="col-md-8">
                        <div class="form-wrapper">
                            <div class="form-group">
                              <p class="text-danger">{{ message }}</p>
                              <div class="input-group">
                                <span class="input-group-addon" id="addon-user"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                                <input type="text" class="form-control" @keyup.enter="tab()" placeholder="Username" v-model="auth.username" aria-describedby="addon-user" debounce="200"  v-el:username-Input autofocus>
                                <span class="input-group-addon hidden"></span>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon" id="addon-password"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></span>
                                <input type="password" @keyup.enter="login()" v-el:password-Input class="form-control" placeholder="Password" v-model="auth.password" aria-describedby="addon-password" debounce="500">
                                <span class="input-group-addon hidden"></span>
                              </div>
                              <button :disabled="disabledSubmit" type="submit" class="margin btn btn-info btn-fill" @click.prevent="login()">Log in</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
</div>
</template>

<script>
  import http from '../../services/http';
  import Session from '../../services/session';
  import ls from '../../services/ls';
  import NProgress from 'nprogress';
  import { alert } from 'vue-strap';

  export default {
    components: { alert },
    data() {
      return {
        auth: {
          username: '',
          password: '',
          role: '',
        },


        status: '',
        alert: false,
        check: true,


        disabledSubmit: true,

        els: {
          username: this.$els.usernameInput,
          password: this.$els.passwordInput
        }
      }
    },

    ready() {
      var object = this.$els.usernameInput;
      Vue.nextTick(function() {
          object.focus();
      });
    },

    methods: {
       login() {
         NProgress.set(0.3);
           http.post('users/auth', {
             username: this.auth.username,
             password: this.auth.password
           }, (response) => {
             NProgress.done();
             if(response.data) {
               Session.init(response.data);
               ls.set('username', response.data.username);
               this.$route.router.go({ name: 'home' })
             }
           }, (error) => {
             this.message = error.data.message;
           })
       },

       tab() {
         var object = this.$els.passwordInput;
         Vue.nextTick(function() {
             object.focus();
         });
       },
    },

    watch: {
      'auth.password': function(){
        if(this.auth.password != ''){
          this.disabledSubmit = false;
        } else {
          this.disabledSubmit = true;
        }
      },
    }
  }
</script>

<style>
.auth {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.longer {
  min-height: 350px;
}

.margin {
  margin-top: 15px;
}
</style>
