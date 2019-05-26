<template>
  <div class="education text-left">
    <h1> {{ title }}</h1>
    <div class="exp-special">
      <ul class="ul-list" v-for='item in education' :key='item.index'>
        <li class="ul-list-item">
          <h5>{{ item.title }}</h5>
          <h6> {{ item.department }}</h6>
          <p class="during">{{ item.during }}</p>
          <ul>
            <li v-for='list in item.about' :key='list.index'>{{ list }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
</style>
<script>
export default {
  name: 'Education',
  props: ['title'],
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
