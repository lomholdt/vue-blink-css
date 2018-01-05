<template>
  <div id="app">
    <VueBlink :duration="5">Hello There!</VueBlink>
    <VueBlink :duration="1">Blink is back!</VueBlink>
    <VueBlink
      :duration="1.1"
      :iterationCount="5">
      <p>This is super annoying!</p>
    </VueBlink>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
