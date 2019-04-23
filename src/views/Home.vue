<template>
  <div class="home">
    <div class="header row justify-content-md-center">
      <div class="logo logo col-md-2 mb-4">
        <img alt="Vue logo" src="@/assets/images/vue_logo.png">
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
