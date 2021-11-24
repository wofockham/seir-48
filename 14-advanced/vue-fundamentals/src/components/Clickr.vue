<template>
  <button @click="incrementCount">
    {{ clicks }} clicks so far
  </button>
</template>

<script>
export default {
  name: 'Clickr',
  data() {
    return {
      clicks: 0
    };
  },
  methods: {
    incrementCount() {
      this.clicks++;
    }
  }
}
</script>

<style scoped>
button {
  background-color: yellow;
}
</style>
