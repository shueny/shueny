<template>
  <div class="home">
    <TopHead></TopHead>
    <KVTyper title="Hi! I'm Shueny Wang"></KVTyper>
    <!-- <KV></KV> -->
    <AboutMe title="About Me."></AboutMe>
    <Skills title="Skills." subTitle="技術"></Skills>
    <Works title="Work" subTitle="作品集"></Works>
    <!-- <HelloWorld title="Work" subTitle="作品集"></HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '@/components/TopHead.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import Works from '@/components/Works.vue'
import KVTyper from '@/components/KVTyper.vue'
import AboutMe from '@/views/AboutMe.vue'
import Skills from '@/components/Skills.vue'

export default {
  name: 'home',
  components: {
    TopHead, Works, KVTyper, AboutMe, Skills
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
