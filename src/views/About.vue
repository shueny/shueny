<template>
  <div>
    <div class="aboutMe">
      <div class="container justify-content-center">
        <div class="header mb-2">
          <p class="line line-grey"><span class="subTitle col-md-4">The Resume of</span></p>
          <h1 class="title">
            <span>{{ name }}</span>
            <b class="dot"><font-awesome-icon icon="circle" /></b>
            <span class="ml-1">{{ enName }}</span>
          </h1>
          <Contact></Contact>
          <Works></Works>
          <p class="line line-grey"></p>
        </div>
        <Skills title="技能"></Skills>
      </div>
    </div>
    <ExperiencesList title="工作經歷"/>
    <Education title="學歷"></Education>
    <SpecialExperiences title="特殊經歷"></SpecialExperiences>
  </div>
</template>

<style lang="scss" scope>
@import '@/assets/scss/_about.scss';
</style>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'
import Works from '@/components/Works.vue'
import Skills from '@/components/Skills.vue'
import ExperiencesList from '@/components/ExperiencesList.vue'
import Education from '@/components/Education.vue'
import SpecialExperiences from '@/components/SpecialExperiences.vue'

export default {
  name: 'about',
  components: {
    Contact,
    Works,
    Skills,
    Education,
    ExperiencesList,
    SpecialExperiences
  },
  data () {
    return {
      name: '王舜瑩',
      enName: 'Shueny Wang'
    }
  }
}
</script>
