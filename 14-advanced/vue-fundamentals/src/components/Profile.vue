<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ bio }}</h3>
    <div>
      <button @click="zoomIn"> + </button>
      <button> - </button>
    </div>
    <img v-bind:src="pic" v-bind:height="size" />
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String,
    bio: String,
    pic: String,
  },
  data() {
    return {
      size: 100
    }
  },
  methods: {
    zoomIn() {
      this.size += 10;
    }
  }
}
</script>

<style>
</style>
