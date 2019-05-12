<template>
  <div class="home">
    <TopHead></TopHead>
    <KV></KV>
    <Works title="Work" subTitle="作品集"></Works>
    <!-- <HelloWorld title="Work" subTitle="作品集"></HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '@/components/TopHead.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import Works from '@/components/Works.vue'
import KV from '@/components/KV.vue'

export default { 
  name: 'home',
  components: {
    TopHead, Works, KV
  },
  metaInfo: {
    title: "Shueny's Vue",
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  }
}
</script>
