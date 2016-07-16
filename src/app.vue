<template>
  <index></index>
</template>

<script>
  import index from './components/index.vue';

  export default {
    components: { index },
    name: 'app',
  }
</script>

<style>
  body, html {
    margin: 0;
    height: 100%;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
