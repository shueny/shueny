<template>
  <!-- <div class="KV" :style="{backgroundImage: 'url(' + imgPicBg + ')' }">
    <img src="images/grapefruit.png" alt="">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <div class="infobox">
      <div class="info"><img src="images/logo2.png" alt="">
      <div>
          <a href="tel:+886912810615" onclick="bga('首頁/電話')">
            <i aria-hidden="true" class="fa fa-phone">0912810615</i>
          </a>
          <a href="mailto:chenyouz@outlook.com" onclick="bga('首頁/信箱')">
            <i aria-hidden="true" class="fa fa-envelope">chenyouz@outlook.com</i>
          </a>
          <a href="http://www.cyz.ninja/">
            <i aria-hidden="true" onclick="bga('首頁/網站')" class="fa fa-link">cyz.ninja</i>
          </a>
        </div>
      </div>
    </div>
  </div> -->
  <div class="kv" :style="{backgroundImage: 'url(' + imgPicBg + ')' }">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5 text-left logo-name wow fadeInDown">
          <img class="" :src="imgName" alt="Shueny's CV">
        </div>
        <div class="col-md-4 my-auto ml-auto">
          <div class="px-5 pt-5 links text-left">
            <ul class="links-contact m-0">
              <li class="text-left text-nowrap" v-for="data in contact" :key="data.index">
                <a class="btn btn-link p-0 text-left" href="mailto:shuen29@gmail.com"
                v-if="data.data == 'shuen29@gmail.com'">
                  <b class="icon d-inline-block text-center mr-1">
                    <font-awesome-icon :icon="data.icon"/>
                  </b>
                  {{ data.data }}
                </a>
                <p class="mb-0" v-else>
                  <b class="icon d-inline-block text-center mr-1">
                    <font-awesome-icon :icon="data.icon"/>
                  </b>
                  {{ data.data }}
                </p>
              </li>
            </ul>
          </div>
          <div class="links-works m-0 px-5">
            <ul>
              <li>
                <div class="d-flex">
                  <a :href="item.link" target="_blank"
                  v-for='item in worksLink' :key='item.index' class="btn btn-link">
                      <font-awesome-icon :icon="['fab',item.iconName]" />{{ item.item }}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import ImgPicBg from '../assets/images/header-bg.jpg'
import ImgName from '../assets/images/logo-name.png'


var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true
})
wow.init()
export default {
  name: 'KV',
  props: ['title', 'subTitle'],
  data () {
    return {
      imgPicBg: ImgPicBg,
      imgName: ImgName,
      contact: [
        {
          icon: 'mobile-alt',
          data: '0911241129'
        },
        {
          icon: 'envelope',
          data: 'shuen29@gmail.com'
        }
      ],
      worksLink: [
        {
          iconName: 'github',
          link: 'https://github.com/shueny'
        },
        {
          iconName: 'github-alt',
          link: 'https://shueny.github.io/'
        },
        {
          iconName: 'wordpress',
          link: 'https://mango-pizza.life'
        },
        {
          iconName: 'codepen',
          link: 'https://codepen.io/Shueny/'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";

.kv {
  width: 100%;
  height: 355px;
  color: $white;
  background-color: $white;
  background-size: cover;
  background-position: center;
  margin-top: 44px;

  a {
    color: $dark-grey;
  }
  .links-contact {
    b {
      width: 1rem;
      height: 1rem;
    }
  }
  .links-works {
    a {
      width: 1rem;
      padding: 0;
      margin-right: 0.75rem;
      padding: 0;
    }
  }

  .logo-name {
    @include phone-width() {
      padding-left: calc(3rem + 15px);
    }
  }

  img {
    @include phone-width() {
      max-width: 200px;
    }
  }
}
</style>
