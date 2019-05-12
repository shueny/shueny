<template>
  <div id="nav">
    <router-link to="/"><img src="@/assets/images/logo-web.png" alt="Shueny's Vue"></router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/todo">Todo List</router-link>
  </div>
</template>

<script>
export default {
  name: 'WorkList',
  data () {
    return {
      logo: '../assets/images/logo-web.png',
      icons: ['bars', 'envelope']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_about.scss';
  #nav {
      height: $font4*5;
  }
</style>

