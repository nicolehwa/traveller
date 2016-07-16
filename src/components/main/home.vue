<template>
<site-header></site-header>
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">Dashboard <button class="btn btn-info btn-fill pull-right" type="button" @click.prevent="plus()">
            <i class="glyphicon glyphicon-plus"></i> New Tour
            </button></h4>
            <div class="categories">All your tours details</div>
          </div><hr>
          <div class="content">
            <div class="row">
              <div class="col-md-12">
                <div class="table-full-width" id="no-more-tables">
                    <table class="table table-hover table-striped cf">
                        <thead class="cf">
                            <th>ID</th>
                            <th>Description</th>
                            <th>Mode</th>
                            <th>Ticket</th>
                            <th>Local Cab</th>
                            <th>Dest. Cab</th>
                            <th>Hotel</th>
                            <th>Local Conveyance</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="tour in tours">
                                <td data-title="ID">{{ tour.id }}</td>
                                <td data-title="Description">{{ tour.description }}</td>
                                <td data-title="Mode">{{ tour.mode }}</td>
                                <td data-title="Ticket">{{ tour.ticket | currency 'RM' }}</td>
                                <td data-title="Local Cab">{{ tour.localCab | currency 'RM' }}</td>
                                <td data-title="Dest Cab">{{ tour.destCab | currency 'RM' }}</td>
                                <td data-title="Hotel">{{ tour.hotel | currency 'RM' }}</td>
                                <td data-title="Conveyance">{{ tour.conveyance }}</td>
                                <td data-title="Start Date">{{ tour.startDate}}</td>
                                <td data-title="End Date">{{ tour.endDate }}</td>
                                <td data-title="Status">{{ tour.status }}</td>
                                <td data-title="Actions">
                                  <button v-if="tour.status == 'Draft'" v-link="{name: 'edit', params: { id: tour.id }}" class="btn btn-sm btn-fill btn-circle btn-primary"><i class="fa fa-edit"></i>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<site-footer></site-footer>

</template>

<script>

import Session from '../../services/session';
import http from '../../services/http';
import dropdown from 'vue-strap';
import siteHeader from '../../components/template/header.vue';
import siteFooter from '../../components/template/footer.vue';
import NProgress from 'nprogress';
export default {
    components: {
        dropdown, siteHeader, siteFooter
    },

    data() {
        return {
          tours: [],
        }
    },

    ready() {
      this.loadData();
    },

    methods: {
        loadData: function() {
          NProgress.set(0.3);
          http.get(`api/v1.0/tours`, (response) => {
              this.tours = response.data;
              NProgress.done();
          })
        },

      plus() {
        this.$route.router.go({ name: 'tour' })
      }
  }
}

</script>
<style>
</style>
