<template>
  <div>
    <h1>Calculator</h1>
    <div v-if="a && b">
      <h2>Results</h2>
      <p>{{ a }} + {{ b }} = {{ a + b }}</p>
      <p>{{ a }} - {{ b }} = {{ a - b }}</p>
      <p>{{ a }} * {{ b }} = {{ a * b }}</p>
      <p>{{ a }} / {{ b }} = {{ a / b }}</p>
      <p>{{ a }} ** {{ b }} = {{ a ** b }}</p>
    </div>

    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      a: null,
      b: null
    }
  }
}
</script>
