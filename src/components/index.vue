<template>
      <div class="wrapper" v-bind:class="{ 'color': show('login') }">
        <div v-bind:class="{ 'full-width': show('login'), 'main-panel': show('login')}">
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
export default {

  methods: {
  show(location) {
    return location === this.$route.name;
  },
}
}
</script>

<style>
.main-panel {
  overflow-x: hidden;
  height: 100%;
  overflow-y: auto;
}
.wrapper {
  height: 100%;
}
.full-width {
  width: 100% !important;
}
.color {
  background-image: url('../../assets/images/beach.jpg');
  background-size: cover;
}
</style>
