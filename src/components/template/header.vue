<template>

<nav class="navbar navbar-default navbar-fixed sticky-head">
    <div class="container-fluid">

        <div class="navbar-header">
            <dropdown>
                <button type="button" class="navbar-toggle btn btn-default btn-yay" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp {{ session.username }} &nbsp
                    <span class="caret"></span>
                </button>
                <ul name="dropdown-menu" class="dropdown-menu full-width">
                    <li>
                        <a href="#" @click.default="logout()">
                            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>&nbsp&nbsp&nbspLogout
                        </a>
                    </li>
                </ul>
            </dropdown>
            <button @click.prevent="showLeft = true" class="x navbar-brand btn btn-default btn-fill btn-sm"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></button>
            <a class="navbar-brand z" href="#"> <i class="pe-7s-id"></i> Traveller Company </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <dropdown>
                        <button type="button" class="btn btn-default btn-yay" data-toggle="dropdown">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp {{ session.username }} &nbsp
                            <span class="caret"></span>
                        </button>
                        <ul name="dropdown-menu" class="dropdown-menu">
                              <li>
                                <a href="#" @click.default="logout()">
                                    <span class="glyphicon glyphicon-off" aria-hidden="true"></span>&nbsp&nbsp&nbspLogout
                                </a>
                            </li>
                        </ul>
                    </dropdown>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<script>

import http from '../../services/http';
import dropdown from 'vue-strap';
import Session from '../../services/session';
import { aside }
from 'vue-strap';
export default {
    components: {
        dropdown, aside
    },

    data() {
        return {
          session: Session
        }
    },

    ready() {
    // this.admin = (Session.role === 'Manager');
  },

    logout() {
      Session.logout();
    }
// }
}

</script>
<style>

.list-group a p {
    margin: 0;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.list-group a {
    color: #000;
    margin: 25px 15px;
    opacity: .86;
    border-radius: 4px;
    display: block;
}

.list-group i {
    font-size: 28px;
    float: left;
    margin-right: 10px;
    line-height: 30px;
    width: 25px;
    text-align: center;
}

.x {
    display: none;
    padding: 10px !important;
    height: 40px !important;
    margin: 10px !important;
}

.btn-yay {
    border: none !important;
    height: 31px;
    width: auto;
}

@media (max-width: 991px) {
    .x {
        display: inline;
        padding: 8px !important;
        height: 36px !important;
        margin-right: 0 !important;
    }
    .z {
        font-size: 12px !important;
        position: absolute;
        left: 12%;
    }
    .z i {
        display: none;
    }

    .sticky-head {
      position: fixed;
      width: 100%;
      z-index: 1000;
    }

    .content {
      margin-top: 40px;
    }

    .btn-yay {
      margin-right: 50px !important;
    }
}


</style>
