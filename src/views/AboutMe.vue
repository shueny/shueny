<template>
    <div class="aboutMe section">
      <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="about-content text-left">
                  <h1 class="mb-2">{{ title }}</h1>
                  <h2 class="">I'm Shueny Wang / 王舜瑩</h2>
                  <p class="my-2">I am a web designer and developer from Taiwan.</p>
                  <p class="my-2">自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹自我介紹</p>
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
@import "@/assets/scss/_variables.scss";
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
