
import Home from './components/main/home.vue';
import Tour from './components/main/tour.vue';
import Edit from './components/main/edit.vue';
import Login from './components/auth/login.vue';
import Advertise from './components/main/advertise.vue';
import ls from './services/ls';
import Session from './services/session';

export default function(router) {

  router.map({
    '/': {
      name: 'home',
      auth: true,
      component: Home
    },

    '/dashboard': {
      name: 'dashboard',
      auth: true,
      component: Home
    },

    '/tour': {
      name: 'tour',
      auth: true,
      component: Tour
    },

    '/tour/:id': {
      name: 'edit',
      auth: true,
      component: Edit
    },

    '/login': {
      name: 'login',
      auth: false,
      component: Login
    },

    '/advertise': {
      name: 'advertise',
      auth: false,
      component: Advertise
    },
  });

  router.beforeEach(function (transition) {
    if (transition.to.auth && !Session.username) {
      transition.redirect('/login')
    } else {
      document.getElementsByClassName('navbar-header').scrollTop;
      transition.next()
    }
  })

}
