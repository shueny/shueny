<template>
  <div class="education text-left spaceWrapperContainer">
    <div id="education" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="exp-special">
      <ul class="ul-list">
        <li class="item ul-list-item wow slideInUp" v-for='item in education' :key='item.index'>
          <h5>{{ item.department }} | {{ item.during }}</h5>
          <h6>{{ item.title }}</h6>
          <ul class="ul-list--inner">
            <li class="item" v-for='list in item.about' :key='list.index'>{{ list }}</li>
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
  name: 'Education',
  props: ['title', 'subTitle'],
  data () {
    return {
      education: [
        {
          title: '國立臺南大學',
          during: '2011/8-2009/9',
          department: '數位學習科技所',
          about: [
            '運用資訊科技於教材開發及教學設計,改善教學品質並提升學習成效',
            '論文: 以Unity的架構並用3D Max建模,製作出一個虛擬的博物館導覽系統,再對此系統做 UI/UX 及開發技術的評估'
          ]
        },
        {
          title: '實踐大學',
          during: '2009/6-2005/9',
          department: '資訊模擬與設計系',
          about: [
            '網頁設計、平面設計、動畫設計、電腦程式語法及資料庫',
            '專題: 用C#及資料庫製作電子商務網站'
          ]
        }
      ]
    }
  }
}
</script>
