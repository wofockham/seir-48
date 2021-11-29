<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="ui germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter German word..." v-model="word.german" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="ui united kingdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter English word..." v-model="word.english" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'word-form',
  props: {
    word: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      errorsPresent: false
    }
  },
  methods: {
    onSubmit: function () {
      if (this.word.english === '' || this.word.german === '') {
        this.errorsPresent = true;
      } else {
        console.log('TODO: save the updates to the server');
      }
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
