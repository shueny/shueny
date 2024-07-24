<template>
  <div class="education text-left spaceWrapperContainer">
    <div id="education" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="exp-special">
      <ul class="ul-list">
        <li
          class="item ul-list-item wow slideInUp"
          v-for="item in education"
          :key="item.index"
        >
          <h5>{{ item.department }} | {{ item.during }}</h5>
          <h6>{{ item.title }}</h6>
          <ul class="ul-list--inner">
            <li class="item" v-for="list in item.about" :key="list.index">
              {{ list }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/base/_variables.scss';
</style>
<script>
export default {
  name: 'Education',
  props: ['title', 'subTitle'],
  data() {
    return {
      education: [
        {
          title: 'National University of Tainan',
          during: '2011/8-2009/9',
          department: 'Information and Learning Technology',
          about: [
            'Applied information technology to teaching materials development and instructional design to improve teaching quality and learning outcomes.',
            'Thesis: Developed a virtual museum tour system using Unity and 3D Max modeling, and evaluated the system\u0027s UI/UX and development techniques.',
          ],
        },
        {
          title: 'Shih Chien University',
          during: '2009/6-2005/9',
          department: 'Computer Simulation & Design',
          about: [
            'Web design, graphic design, animation design, computer programming, and databases.',
            'Project: Created an e-commerce website using C# and databases.',
          ],
        },
      ],
    }
  },
}
</script>
