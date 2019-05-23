<template>
  <div class="skill">
    <div class="container">
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
      <div class="row my-4">
        <div class="col-md-6 mb-4 wow bounceIn animated" v-for="(item, index) in skills" :key='item.index' style="height: 20rem;">
          <div class="skill-item p-5">
            <span class="icon d-inline-block mb-3">
              <font-awesome-icon :icon="item.icon"/>
            </span>
            <h4 class="skill-item-title font-weight-bold">{{ item.title }}</h4>
            <p class="line-s my-2 mx-auto"></p>
            <h6 class="my-3">
              <span class="mx-1 d-inline-block" v-for="(skillItem, index) in item.skillList">
                {{ skillItem }}{{ (index+1 < item.skillList.length) ? ', ' : '' }}
              </span>
            </h6>
            <p class="skill-item-text">{{ item.info }}</p>
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="workSkill skill mb-5 row">
      <div class="wrapper">
        <div class="skill-item" v-for="(item, index) in webSkill" :key='item.index'>
          <p class="text-left">{{ item.item }}</p>
          <div class="skill-item-bar wow slideInLeft animated" :class="['skill-item-' + item.data]">
              <span :class="['skill-item'+ index ]">{{ item.data }}%</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Coding</h2>
        <div class="text-left">
          <div class="d-inline-block skill-web p-2 flex-fill bd-highlight" v-for="item in webSkill" :key='item.index'>
            <b-progress class="" :variant="item.item"
            :key="item" :striped="striped" :animated="animate">
              <b-progress-bar variant="primary" class="px-3"
              :value="item.data" show-progress>{{ item.item }}</b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="skill-others">
          <h2>Others</h2>
          <ul>
            <li class="d-inline-block tags p-2" v-for='item in otherSkill' :key='item.index'>
              <span class="p-2 boder">{{ item }}</span></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="skill-language">
          <h2>Design</h2>
          <ul>
            <li class="d-inline-block tags p-2" v-for='item in design' :key='item.index'>
              <span>{{ item }}</span></li>
          </ul>
        </div>
      </div>
      <!-- Progress bar style -->
      <!-- <div class="row">
        <div class="col-md-4" v-for="(group, i) in webSkillGroups" :key='group.i'>
          <div class="skill-web mb-2 fade_in visible"
          v-for="item in webSkill.slice(i * (webSkill.length / 3), (i + 1) * (webSkill.length / 3))"
          :key='item.index'>
            <h5>{{ item.item }}</h5>
            <b-progress class="mt-2" :variant="item.item"
            :key="item" :striped="striped" :animated="animate">
              <b-progress-bar variant="primary"
              :value="item.data" show-progress>{{ item.data }}</b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="skill-language">
        <h2>語言能力</h2>
        <ul>
          <li v-for='item in language' :key='item.index'>{{ item }}</li>
        </ul>
      </div>
    </div>
    -->
    <!-- <div class="row">
      <div class="col-md-6">
        <div class="skill-others">
          <h2>其他技能</h2>
          <ul>
            <li v-for='item in otherSkill' :key='item.index'>{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skill-language">
          <h3>語言能力</h3>
          <ul>
            <li v-for='item in language' :key='item.index'>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.skill {
  &-item {
    height: 100%;
    background: $white;
    -webkit-box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
    border-radius: $font4*2;
    -webkit-transition: all .5s;
    transition: all .5s;

    .icon {
      font-size: $font4*6;
      width: $font4*17;
      height: $font4*17;
      line-height: $font4*17;
      background: lighten($light-grey, 20%);
      border-radius: 50%;
      -webkit-transition: all .5s;
      transition: all .5s;
    }

    &:hover {
      transform: scale(1.1);
      .icon {
        background: $dark-grey;
        color: $white;
      }
    }
  }
}
.line {
  &-s {
    width: $font4*10;
    height: 1px;
    background-color: $dark-grey;
  }
}
</style>

<script>
import { WOW } from 'wowjs'

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true
})
wow.init()

export default {
  name: 'Skills',
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
      striped: true,
      animate: true,
      skills: [
        {
          icon: 'desktop',
          title: 'Frontend Development',
          skillList: ['HTML5', 'CSS3', 'JavaScript(ES6)', 'jQuery', 'Liquid', 'Vue.js', 'React'],
          info: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明'
        },
        {
          icon: 'server',
          title: 'Backend Development',
          skillList: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL'],
          info: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明'
        },
        {
          icon: 'palette',
          title: 'Web Design',
          skillList: ['Photoshop', 'Illustrator', 'Adobe XD'],
          info: '說明說明說明說明說明說明說明說明說明'
        },
        {
          icon: 'terminal',
          title: 'Others',
          skillList: ['Git', 'Webpack'],
          info: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明'
        }
      ],
      webSkill: [
        {
          item: 'HTML5, CSS3',
          data: 95
        },
        {
          item: 'SCSS',
          data: 80
        },
        {
          item: 'Bootstrap',
          data: 85
        },
        {
          item: 'Javascript',
          data: 75
        },
        {
          item: 'jQuery',
          data: 90
        },
        {
          item: 'Vue.js',
          data: 40
        },
        {
          item: 'Node.js',
          data: 5
        },
        {
          item: 'Webpack',
          data: 25
        }
      ],
      otherSkill: [
        'RWD', 'Git', 'SEO', 'GA', 'GTM'
      ],
      design: ['Zeplin', 'XD', 'Photoshop', 'Illustrator'],
      language: [
        '中文 / 台語 精通', '英文 (TOEIC 綠色證照)'
      ]
    }
  },
  computed: {
    webSkillGroups () {
      return Array(this.webSkill.length / 3).fill().map((_, i) => [this.webSkill[i * 2], this.webSkill[i * 2 + 1]])
    }
  },
  methods: {
  }
}
</script>
