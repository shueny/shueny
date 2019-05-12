<template>
  <div>
    <h2> {{ title }}</h2>
    <div class="workSkill skill mb-5">
      <h3>Coding</h3>
      <!-- <div class="d-flex justify-content-around">
        <div class="skill-web p-2 flex-fill bd-highlight" v-for="item in webSkill" :key='item.index'>
          <b-progress class="mt-2" :variant="item.item"
          :key="item" :striped="striped" :animated="animate">
            <b-progress-bar variant="primary"
            :value="item.data" show-progress>{{ item.item }}</b-progress-bar>
          </b-progress>
        </div>
      </div> -->

      <div class="row">
        <div class="col-md-4" v-for="(group, i) in webSkillGroups" :key='group.i'>
          <div class="skill-web mb-2"
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
      
      <!-- <div class="row" v-for="(group, i) in webSkillGroups" :key='group.i'>
        <div class="skill-web"
        v-for="(item, index) in webSkill.slice(i * splitNum, (i + 1) * splitNum)"
        :key='item.index'>
          <h5>{{ item.item }}</h5>
          <b-progress class="mt-2" :variant="item.item"
          :key="item" :striped="striped" :animated="animate">
            <b-progress-bar variant="primary"
            :value="item.data" show-progress>{{ index }}</b-progress-bar>
          </b-progress>
        </div>
      </div> -->
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skill-others">
          <h3>其他技能</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: ['title'],
  data () {
    return {
      striped: true,
      animate: true,
      webSkill: [
        {
          item: 'HTML5',
          data: 90
        },
        {
          item: 'CSS3',
          data: 90
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
        'RWD', 'Git', 'SEO', 'GA', 'GTM', 'Photoshop', 'Illustrator'
      ],
      language: [
        '中文 / 台語 精通', '英文 (TOEIC 綠色證照)'
      ]
    }
  },
  computed: {
    webSkillGroups () {
      return Array(this.webSkill.length / 3).fill().map((_, i) => [this.webSkill[i * 2], this.webSkill[i * 2 + 1]])
    }
  }
}
</script>
