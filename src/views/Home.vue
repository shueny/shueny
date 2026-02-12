<template>
  <div id="home" class="home">
    <NavBar :data="this.activeBlock"></NavBar>
    <!-- <TopHead></TopHead> -->
    <KVTyper title="Hi! I'm Shueny Wang"></KVTyper>
    <!-- <KV></KV> -->
    <div class="waypoint"
        v-waypoint="{ active: true, callback: logOne }" id="about">
      <AboutMe title="About Me."></AboutMe>
    </div>
    <div class="waypoint"
         v-waypoint="{ active: true, callback: logOne }" id="skill">
      <Skills title="Skills." subTitle="技術"></Skills>
    </div>
    <div class="waypoint"
         v-waypoint="{ active: true, callback: logOne }" id="work">
      <Works title="Work" subTitle="作品集"></Works>
    </div>
    
    <div class="section section-bg waypoint"
    v-waypoint="{ active: true, callback: logOne }" id="experienceandeducation">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ExperiencesList title="Experiences." subTitle="經歷"></ExperiencesList>
          </div>
          <div class="col-md-6">
            <Education title="Education." subTitle="學歷"></Education>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="waypoint"
            v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" id="contact">
    </div> -->
    <!-- <HelloWorld title="Work" subTitle="作品集"></HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
// Above-fold components loaded eagerly
import NavBar from '@/components/Navbar.vue'
import KVTyper from '@/components/KVTyper.vue'
import AboutMe from '@/views/AboutMe.vue'
// Below-fold components loaded lazily for faster initial paint
const Skills = () => import(/* webpackChunkName: "below-fold" */ '@/components/Skills.vue')
const Works = () => import(/* webpackChunkName: "below-fold" */ '@/components/Works.vue')
const Education = () => import(/* webpackChunkName: "below-fold" */ '@/components/Education.vue')
const ExperiencesList = () => import(/* webpackChunkName: "below-fold" */ '@/components/ExperiencesList.vue')
import VueWaypoint from 'vue-waypoint'

export default {
  name: 'home',
  components: {
    NavBar, Works, KVTyper, AboutMe, Skills, Education, ExperiencesList
  },
  metaInfo: {
    title: "Shueny's Vue",
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  },
  data () {
    return {
      intersectionOptions: {
        root: document.querySelector('#app'),
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      },
      activeBlock: 'about'
    }
  },
  mounted () {
    // Initialize WOW.js after DOM is ready to avoid blocking initial render
    import('wowjs').then(({ WOW }) => {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      })
      this.$nextTick(() => wow.init())
    })
  },
  methods: {
    logOne ({ el, going, direction }) {
      let activeEl = el.getAttribute('id')
      if (going === 'in') {
        this.activeBlock = el.getAttribute('id')
        document.getElementById(activeEl).classList.add('active')
      }
      if (going === 'out') {
        document.getElementById(activeEl).classList.remove('active')
      }
    }
  }
}
</script>
