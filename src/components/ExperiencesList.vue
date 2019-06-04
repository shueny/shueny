<template>
  <div class="experience text-left spaceWrapperContainer">
    <div id="experience" class="spaceWrapper"></div>
    <h1 class="title"> {{ title }}</h1>
    <div class="">
      <ul class="ul-list">
        <li class="item ul-list-item wow slideInUp" v-for='item in experiences' :key='item.index'>
          <h5>{{ item.title }} | {{ item.during }}</h5>
          <h6>{{ item.company }}</h6>
          <ul class="ul-list--inner">
            <li class="item" v-for='(item, index) in experiences' :key='item.index'>
              {{ item.list[index] }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
</style>

<script>
export default {
  name: 'ExperiencesList',
  props: ['title'],
  data () {
    return {
      experiences: [
        {
          company: 'Citiesocial 任開媒體',
          title: '前端工程師',
          during: '2018/5-Now',
          list: [
            '測試測試測試A',
            '測試測試測試B',
            '測試測試測試C',
            '測試測試測試D'
          ]
        },
        {
          company: 'MOMO 富邦媒體股份有限公司',
          title: '工程師',
          during: '2016/8-2018/5',
          list: [
            '公司大小網、後台介面切版(HTML5, CSS3, RWD)',
            '用 JS 撰寫 Banner 及網頁動態特效',
            '和後台開發人員進行應用及系統整合',
            '與企劃、工程師配合，執行系統研發，開發網頁新功能',
            'UI/UX 動線規劃設計',
            '練習發現小遊戲並用JS撰寫'
          ]
        },
        {
          company: '天擎旅行社',
          title: '設計',
          during: '2015/9-2016/7',
          list: [
            '公司官網視覺設計及建構',
            '撰寫及編修jQuery語法製作網頁動畫',
            '行程景點視覺設計、刊物設計、EDM、名片等',
            '產品行程的編修與美化、主視覺設定',
            '展覽場的規劃與佈置',
            '與業務人員討論及製作相關產品視覺設計'
          ]
        },
        {
          company: '新曜有限公司',
          title: '設計兼採購助理',
          during: '2013/10-2015/8',
          list: [
            '產品照片拍攝',
            '刊物設計及產品介紹圖設計及製作',
            '與外國客戶接洽、email書信',
            '訂單處理(報價、整理訂單、訂船、訂艙等等)',
            '與工廠及船公司聯繫'
          ]
        },
        {
          company: 'S.H.I.T.來自臺灣的獨特內斂',
          title: '網站管理及設計',
          during: '2009/7-2013/4',
          list: [
            '網站改版設計與製作',
            'flash網頁維護及新產品網頁的flash頁面製作',
            '產品圖編修、產品上下架、網頁更新'
          ]
        }
      ]
    }
  }
}
</script>
