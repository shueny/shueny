<template>
  <div class="aboutMe section spaceWrapperContainer">
    <div id="about" class="spaceWrapper"></div>
    <div class="container">
      <div class="row">
          <div class="col-xs-12 col-md-6">
              <div class="about-content text-left">
                <h1 class="title mb-2">{{ title }}</h1>
                <h2 class="subTitle">I'm Shueny Wang / 王舜瑩</h2>
                <p class="my-2">I am a web designer and developer from Taiwan.</p>
                <p class="my-2 description">從大學開始學習網頁建置相關技術，研究所時更深入探討學習使用者分析。出社會後從平面設計開始做起、網頁設計到現在前端工程師。熟悉 JS、jQuery、HTML、 CSS、CSS3、SEO、GA、GTM 等相關技術。喜歡瞭解新知識、新技術，也期待有天能應用在工作上。休閒興趣是旅行、攝影、爬山、做健康的甜點，喜歡分享每一個美好的景色</p>
                <ContactMe></ContactMe>
                <SocialMedia></SocialMedia>
              </div>
          </div>
          <div class="col-xs-12 col-md-6">
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
.about-content {
  p {
    color: darken($light-grey, 15%);
  }
}
</style>

<script>
import ContactMe from '@/components/ContactMe.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
  props: ['title'],
    components: {
      ContactMe, SocialMedia
  }
}
</script>
