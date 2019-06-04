<template>
  <div class="work section spaceWrapperContainer">
    <div id="work" class="spaceWrapper"></div>
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
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import ImgWork1 from '../assets/images/works/momo-brand.jpg'
import ImgWork2 from '../assets/images/works/momoshop-index.jpg'
import ImgWork3 from '../assets/images/works/climb-stairs.jpg'
import ImgWork4 from '../assets/images/works/vue-todo-1.jpg'

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
