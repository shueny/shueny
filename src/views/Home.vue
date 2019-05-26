<template>
  <div class="home">
    <NavBar></NavBar>
    <!-- <TopHead></TopHead> -->
    <KVTyper title="Hi! I'm Shueny Wang"></KVTyper>
    <!-- <KV></KV> -->
    <AboutMe title="About Me."></AboutMe>
    <Skills title="Skills." subTitle="技術"></Skills>
    <Works title="Work" subTitle="作品集"></Works>
    <div class="section section-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ExperiencesList title="Experiences."></ExperiencesList>
          </div>
          <div class="col-md-6">
            <Education title="Education."></Education>
          </div>
        </div>
      </div>
    </div>
    <!-- <HelloWorld title="Work" subTitle="作品集"></HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '@/components/TopHead.vue'
import NavBar from '@/components/Navbar.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import Works from '@/components/Works.vue'
import KVTyper from '@/components/KVTyper.vue'
import AboutMe from '@/views/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Education from '@/components/Education.vue'
import ExperiencesList from '@/components/ExperiencesList.vue'

export default {
  name: 'home',
  components: {
    NavBar, TopHead, Works, KVTyper, AboutMe, Skills, Education, ExperiencesList
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
