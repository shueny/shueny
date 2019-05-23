<template>
  <div>
    <section class="work mt-4">
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
      <div class="container work_list mt-2">
        <ul class="">
          <div class="row mx-auto">
            <li class="col-md-4 p-4 wow slideInUp" v-for="list in works" :key="list.index"
            data-wow-duration="0.5s" data-wow-delay="0.5s">
                <a :href="list.link">
                  <img :src="list.image" :alt="list.title">
                  <div class="text-left text">
                    <h3 class="title mt-3">{{ list.title }}</h3>
                    <span class="mb-2">{{ list.tags }}</span>
                  </div>
                </a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import ImgWork1 from '../assets/images/works/momo-brand.jpg'
import ImgWork2 from '../assets/images/works/momoshop-index.jpg'
import ImgWork3 from '../assets/images/works/climb-stairs.jpg'
import ImgWork4 from '../assets/images/works/vue-todo-1.jpg'

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true
})
wow.init()

export default {
  name: 'Works',
  props: ['title', 'subTitle'],
  data () {
    return {
      works: [
        {
          title: 'MOMOSHOP 品牌旗艦館',
          tags: ['Javascript', 'jQuery', 'CSS3'],
          image: ImgWork1,
          link: 'https://www.momoshop.com.tw/brand/Main.jsp'
        },
        {
          title: 'MOMOSHOP',
          tags: ['Javascript', 'jQuery', 'CSS3'],
          image: ImgWork2,
          link: 'https://www.momoshop.com.tw/main/Main.jsp'
        },
        {
          title: '爬格子',
          tags: ['jQuery'],
          image: ImgWork3,
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: ImgWork4,
          link: 'https://shueny.github.io/climbstairs-game/'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
//colors
$black: #000;
$color_boulder_approx: #787878;
.work {
  h1 {
    font-size: $font4*8;
    font-weight: bold;
  }
  h2 {
    font-size: $font4*4;
  }
  &_list {
    .row {
      h3{
        font-weight: normal;
        font-size: 1rem;
        color: $dark-grey;
      }
      span{
        display: block;
        font-size: 0.75rem;
        color: lighten($dark-grey, 15%);
      }
      li {
        &:hover {
          box-shadow: 0px -1px $font4*2 rgba(0,0,0,0.2);
        }
      }
    }
  }
}
</style>
