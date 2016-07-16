<template>
<site-header></site-header>
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
            <form class="form-wrapper">
              <div class="row">
                <div class="col-md-12">
                <h4 class="title">ADD NEW TOUR</h4></div>
              </div>
              <div class="row" style="margin-top: 10px !important;">
                  <div class="col-md-3">
                      <label><strong>Purpose/ Description</strong></label>
                  </div>
                  <div class="col-md-9">
                    <input v-model="description" type="text" maxlength="50" class="form-control" id="description" placeholder="Purpose/ descriptions">
                 </div>

              </div>
              <div class="row" style="margin-top: 10px !important;">
               <div class="form-group">
                <div class="col-md-3"><label><strong>Start Date</strong></label></div>
                <div class="col-md-9">
                  <datepicker
                      v-ref:dp :value.sync="startDate"
                      :format="format.toString()"
                      :show-reset-button="reset">
                    </datepicker></div>
              </div>
             </div>
             <div class="row" style="margin-top: 10px !important;">
              <div class="form-group">
               <div class="col-md-3"><label><strong>End Date</strong></label></div>
               <div class="col-md-9">
                 <datepicker
                     v-ref:dp :value.sync="endDate"
                     :format="format.toString()"
                     :show-reset-button="reset">
                   </datepicker></div>
             </div>
            </div>
             <div class="row" style="margin-top: 10px !important;">
              <div class="form-group">
               <div class="col-md-3"><label><strong>Mode</strong></label></div>
               <div class="col-md-2">
                 <select class="form-control" v-model="mode">
                   <option value="" disabled selected>Select Mode</option>
                   <option value="Bus">Bus</option>
                   <option value="Flight">Flight</option>
                   <option value="Ferry">Ferry</option>
                 </select>
               </div>
               </div>
             </div>
            <div class="row" style="margin-top: 10px !important;">
            <div class="form-group">
             <div class="col-md-3"><label><strong>Ticket</strong></label></div>
             <div class="col-md-9"><input v-model="ticket" type="number" step="0.01" class="form-control" id="ticket" placeholder="Ticket">
             </div>
             </div>
            </div>
            <div class="row" style="margin-top: 10px !important;">
            <div class="form-group">
             <div class="col-md-3"><label><strong>Airport Cab (Local)</strong></label></div>
             <div class="col-md-9"><input v-model="localCab" type="number" step="0.01" class="form-control" id="lcoalCab" placeholder="Cost of Airport Cab (Local)">
             </div>
             </div>
            </div>
            <div class="row" style="margin-top: 10px !important;">
            <div class="form-group">
             <div class="col-md-3"><label><strong>Airport Cab (Destination)</strong></label></div>
             <div class="col-md-9"><input v-model="destCab" type="number" step="0.01" class="form-control" id="destCab" placeholder="Cost of Airport Cab (Destination)">
             </div>
             </div>
            </div>
            <div class="row" style="margin-top: 10px !important;">
            <div class="form-group">
             <div class="col-md-3"><label><strong>Hotel</strong></label></div>
             <div class="col-md-9"><input v-model="hotel" type="number" step="0.01" class="form-control" id="hotel" placeholder="Hotel cost">
             </div>
             </div>
            </div>
            <div class="row" style="margin-top: 10px !important;">
            <div class="form-group">
             <div class="col-md-3"><label><strong>Local Conveyance at tour destination</strong></label></div>
             <div class="col-md-9"><input v-model="conveyance" type="text" class="form-control" id="conveyance" placeholder="Local conveyance in tour destination">
             </div>
             </div>
            </div>
            <div class="row" style="margin-top: 10px !important;">
              <div class="form-group">
                <div class="col-md-3"><label><strong>Approving Manager</strong></label></div>
                <div class="col-md-9">
                  <select class="form-control" v-model="manager" >
                    <option value="" disabled selected>Select Manager</option>
                    <option v-bind:value="manager.id" v-for="manager in managers">{{ manager.name }}</option>
                  </select>
                </div>
          </div>
          </div>
          <div class="row" style="margin-top: 10px !important;">
            <div class="col-md-10"></div>
            <div class="col-md-1">
              <button class="btn btn-warning btn-fill pull-right" type="button" @click.prevent="draft()">
                <i class="glyphicon glyphicon-save"></i> Save as Draft
              </button>
            </div>
              <div class="col-md-1">
              <button class="btn btn-success btn-fill pull-right" type="button" @click.prevent="submit()">
                <i class="glyphicon glyphicon-ok"></i> Submit
              </button>
            </div>
        </div>
        </form>
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
import { datepicker } from 'vue-strap';
import siteHeader from '../../components/template/header.vue';
import siteFooter from '../../components/template/footer.vue';
import NProgress from 'nprogress';
export default {
    components: {
        datepicker, dropdown, siteHeader, siteFooter
    },

    data() {
        return {
          managers: [],
          description: '',
          mode: '',
          ticket: '',
          localCab: '',
          destCab: '',
          hotel: '',
          conveyance: '',
          manager: 0,
          startDate: new Date().toString(),
          endDate: new Date().toString(),
          format: ['dd-MMM-yyyy'],
          reset: true,
        }
    },

    ready() {
      this.loadData();
    },

    methods: {
        loadData: function() {
          NProgress.set(0.3);
          http.get(`api/v1.0/manager`, (response) => {
              this.managers = response.data;
              NProgress.done();
          })
        },

      plus() {
        this.$route.router.go({ name: 'tour' })
      },

      draft() {
        http.post(`api/v1.0/tour`, {
          description: this.description,
          mode: this.mode,
          ticket: this.ticket,
          localCab: this.localCab,
          destCab: this.destCab,
          hotel: this.hotel,
          conveyance: this.conveyance,
          startDate: this.startDate,
          endDate: this.endDate,
          status: "Draft",
          manager: this.manager,
          flag: 0,
          username: "alice"
        }, (response) => {
          console.log("Posted")
          this.$route.router.go({ name: 'home' })
      })
    },

    submit() {
      http.post(`api/v1.0/tour`, {
        description: this.description,
        mode: this.mode,
        ticket: this.ticket,
        localCab: this.localCab,
        destCab: this.destCab,
        hotel: this.hotel,
        conveyance: this.conveyance,
        startDate: this.startDate,
        endDate: this.endDate,
        status: "Submitted",
        manager: this.manager,
        flag: 1,
        username: "alice"
      }, (response) => {
        console.log("Posted")
        this.$route.router.go({ name: 'home' })
    })
    }
  }
}
</script>
<style
</style>
