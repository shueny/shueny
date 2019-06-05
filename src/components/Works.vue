<template>
  <div class="work section spaceWrapperContainer">
    <div id="work" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="container work_list">
      <ul class="">
        <div class="row mx-auto">
          <li class="col-md-4 p-4 wow slideInUp" v-for="list in works" :key="list.index"
          data-wow-duration="0.5s" data-wow-delay="0.5s">
              <a class="btn-link" :href="list.link" target="_blank">
                <img :src="list.image" :alt="list.title">
                <div class="text-left text">
                  <h3 class="title mt-3">{{ list.title }}</h3>
                  <div class="mb-2">                    
                    <span class="mx-1 d-inline-block" v-for="(listItem, index) in list.tags">
                      {{ listItem }}{{ (index+1 < list.tags.length) ? ', ' : '' }}
                    </span>
                  </div>
                </div>
                <div class="description">
                  <ul class="ul-list">
                    <li class="item ul-list-item" v-for="listItem in list.description">
                      {{ listItem }}
                    </li>
                  </ul>
                </div>
              </a>
              <a class="u-mobile-only btn-link" :href="list.link">{{ list.link }}</a>
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
  data () {
    return {
      works: [
        {
          title: 'MOMOSHOP 品牌旗艦館',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoBrand,
          link: 'https://www.momoshop.com.tw/brand/Main.jsp',
          description: [
            '依照設計的畫面，切版並重寫 CSS',
            '使用 jQuery 撰寫 Menu 中的 "依字母 & 依注音" 的切換，在此遇到畫面中有另一個子畫面且子畫面中點選後要滾動、定位的挑戰'
            ]
        },
        {
          title: 'MOMOSHOP (Desktop)',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoIndex,
          link: 'https://www.momoshop.com.tw/main/Main.jsp',
          description: [
            'MOMOSHOP 本站桌機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作'
            ]
        },
        {
          title: 'MOMOSHOP (Mobile)',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: ImgWork_momoMobile,
          link: 'https://m.momoshop.com.tw/main.momo',
          description: [
            'MOMOSHOP 本站手機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作',
            ''
            ]
        },
        {
          title: '爬格子',
          tags: ['jQuery','SVG'],
          image: ImgWork_climbStair,
          link: 'https://shueny.github.io/climbstairs-game/',
          description: [
            '一個大家每當無法決定事情的時候必玩的小遊戲',
            '在框框中輸入直線個數(即幾個選項)並按下 Enter 鍵後便隨機產生相對應的橫線，點選任一個 momoco 的頭，會自動沿著線走到終點',
            '未來可以再修改增加可以自己輸入選項，根據選項的個數產生直線。也可以與資料庫連接，記下曾經使用的記錄'
            ]
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: ImgWork_vueTodo,
          link: 'https://shueny.github.io/vue-todolist-1/',
          description: [
            '熟悉 Vue.js 從學習寫 Todo List 開始',
            '學習如何使用 Vue.js 建置 Project、Vue.js 的語法、如何使用 Plugins、熟習 ES6 的寫法...等等',
            '使用 localStorge 做 List 的存取，可以新增資料、切換狀態、標記、刪除資料、新增該項目的 comment',
            '下一版考慮與 MongoDB 串接，把資料存到資料庫裡'
            ]
        }
      ]
    }
  }
}
</script>
