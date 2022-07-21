<template>
  <div class="aboutMe section spaceWrapperContainer">
    <div id="about" class="spaceWrapper"></div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="about-content text-left">
            <h1 class="title mb-2">{{ title }}</h1>
            <h2 class="subTitle">{{ aboutData.subTitle }}</h2>
            <p
              class=""
              v-for="(item, index) in aboutData.description"
              :key="index"
            >
              {{ item }}
            </p>
            <ContactMe />
            <SocialMedia />
          </div>
        </div>
        <div class="col-xs-12 col-md-6"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/base/_variables.scss';
.about-content {
  p {
    color: darken($light-grey, 15%);
  }
}
</style>

<script>
import ContactMe from '@/components/ContactMe.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import aboutData from '../data/about.json'

export default {
  props: ['title'],
  components: {
    ContactMe,
    SocialMedia,
  },
  data() {
    return {
      aboutData,
    }
  },
}
</script>
