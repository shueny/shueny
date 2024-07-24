<template>
  <div class="work section spaceWrapperContainer">
    <div id="work" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="container work_list">
      <ul class="">
        <div class="row mx-auto">
          <li
            class="col-md-4 p-4 wow slideInUp"
            v-for="list in works"
            :key="list.index"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <a class="btn-link" :href="list.link" target="_blank">
              <img :src="list.image" :alt="list.title" />
              <div class="text-left text">
                <h3 class="title mt-3">{{ list.title }}</h3>
                <div class="mb-2">
                  <span
                    class="mx-1 d-inline-block"
                    v-for="(listItem, index) in list.tags"
                  >
                    {{ listItem }}{{ index + 1 < list.tags.length ? ', ' : '' }}
                  </span>
                </div>
              </div>
              <div class="description">
                <ul class="ul-list">
                  <li
                    class="item ul-list-item"
                    v-for="listItem in list.description"
                  >
                    {{ listItem }}
                  </li>
                </ul>
              </div>
            </a>
            <a class="u-mobile-only btn-link" :href="list.link">
              {{ list.link }}
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import ImgWork_momoBrand from '../assets/images/works/momo-brand.jpg'
import ImgWork_momoIndex from '../assets/images/works/momoshop-index.jpg'
import ImgWork_momoMobile from '../assets/images/works/momoshop-mobile.jpg'
import ImgWork_climbStair from '../assets/images/works/climb-stairs.jpg'
import ImgWork_vueTodo from '../assets/images/works/vue-todo-1.jpg'

export default {
  name: 'Works',
  props: ['title', 'subTitle'],
  data() {
    return {
      works: [
        {
          title: 'MOMOSHOP Brand Flagship Store',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoBrand,
          link: 'https://www.momoshop.com.tw/brand/Main.jsp',
          description: [
            'Implemented design mockups by creating and optimizing CSS.',
            'Developed a jQuery-based menu for alphabetical and phonetic navigation, tackling challenges involving sub-menus with scrolling and positioning features.',
          ],
        },
        {
          title: 'MOMOSHOP (Desktop)',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoIndex,
          link: 'https://www.momoshop.com.tw/main/Main.jsp',
          description: [
            'Redesigned and developed key sections of the MOMOSHOP desktop site, including the homepage, product pages, category pages, shopping cart, and member center.',
          ],
        },
        {
          title: 'MOMOSHOP (Mobile)',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoMobile,
          link: 'https://m.momoshop.com.tw/main.momo',
          description: [
            'Led the redesign and development of the mobile version of the MOMOSHOP site, focusing on the homepage, product pages, category pages, shopping cart, and member center.',
          ],
        },
        {
          title: 'ClimbStairs Game',
          tags: ['jQuery', 'SVG'],
          image: ImgWork_climbStair,
          link: 'https://shueny.github.io/climbstairs-game/',
          description: [
            'Developed an interactive game for decision making where users input a number of options to generate random lines. Players select a character to navigate through the lines to reach a conclusion.',
            'Planned future enhancements to allow user-defined options, connection to a database for tracking usage history, and more.',
          ],
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: ImgWork_vueTodo,
          link: 'https://shueny.github.io/vue-todolist-1/',
          description: [
            'Started learning Vue.js by building a ToDo List application.',
            'Gained experience in setting up Vue.js projects, using Vue.js syntax, incorporating plugins, and mastering ES6.',
            'Implemented localStorage for data persistence, allowing addition, state toggling, marking, deletion of items, and adding comments to tasks.',
            'Considering future integration with MongoDB to store data in a database.',
          ],
        },
      ],
    }
  },
}
</script>
