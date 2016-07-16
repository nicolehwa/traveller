<template>
  <nav>
    <ul class="pagination">
      <li v-bind:class="{ 'disabled': disabledFirst }">
        <a href="#" aria-label="First" @click.prevent="first">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-bind:class="{ 'disabled': disabledPrevious }">
        <a href="#" aria-label="Previous" @click.prevent="move(-1)">
          <span aria-hidden="true">&lsaquo;</span>
        </a>
      </li>
      <li v-bind:class="{ 'active': n === current }" v-for="n in array">
        <a href="#" @click.prevent="toPage(n)">{{ n }}</a>
      </li>
      <li v-bind:class="{ 'disabled': disabledNext }">
        <a href="#" aria-label="Next" @click.prevent="move(1)">
          <span aria-hidden="true">&rsaquo;</span>
        </a>
      </li>
      <li v-bind:class="{ 'disabled': disabledLast }">
        <a href="#" aria-label="Last" @click.prevent="last">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

  export default {
    props: {
      pagination: {
        type: Object,
        required: true
      },

      current: {
        type: Number,
        required: true
      },

      callback: {
        type: Function,
        required: true
      }
    },

    computed: {
      array: function() {
        let arr = [],
          size = 11,
          offset = 5,
          from = this.current - offset,
          to = this.current + offset;

          if(from < 1) {
            from = 1;
          }

          if(this.pagination.last <= size) {
            size = this.pagination.last;
            from = 1;
          }

          if(to < size) {
            to = 11
          }

          if(to >= this.pagination.last) {
            from = this.pagination.last - (size - 1);
            to = this.pagination.last;
          }

          while(from <= to) {
            arr.push(from);
            from++;
          }

        return arr;
      },

      disabledFirst: function() {
        return this.pagination.first === this.current;
      },

      disabledLast: function() {
        return this.pagination.last === this.current;
      },

      disabledPrevious: function() {
        return this.pagination.first === this.current;
      },

      disabledNext: function() {
        return this.pagination.last === this.current;
      },
    },

    methods: {
      move: function(direction) {
        if((!this.disabledNext && direction === 1) || (!this.disabledPrevious && direction === -1)) {
          this.current = this.current + direction;
          this.callback();
        }
      },

      toPage: function(page) {
        if(this.current !== page) {
            this.current = page;
            this.callback();
        }
      },

      first: function(page) {
        this.current = this.pagination.first;
        this.callback();
      },

      last: function(page) {
        this.current = this.pagination.last;
        this.callback();
      }
    }
  }
</script>

<style>
</style>
