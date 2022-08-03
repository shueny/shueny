<template>
  <div class="experience text-left spaceWrapperContainer">
    <div id="experience" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="">
      <ul class="ul-list">
        <li
          class="item ul-list-item wow slideInUp"
          v-for="item in experiences"
          :key="item.index"
        >
          <h5>{{ item.title }} | {{ item.during }}</h5>
          <h6>{{ item.company }}</h6>
          <ul class="ul-list--inner">
            <li
              class="item"
              v-for="(item, index) in experiences"
              :key="item.index"
            >
              {{ item.list[index] }}
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
  name: 'ExperiencesList',
  props: ['title', 'subTitle'],
  data() {
    return {
      experiences: [
        {
          company: 'Trend Micro',
          title: 'Senior Front-End Developer',
          during: '2021/9-present',
          list: [
            'Implemented VSOC (Vehicle SOC) platform using React.js',
            'Implemented Campaign website by Next.js and tailwindcss',
            'Maintain the finite state-machine model in building complex UI components or workflows by XState',
            'Tracked system through Google Tag Manager, Google Analytics and Hotjar',
          ],
        },
        {
          company: 'Synttro',
          title: 'Senior Front-End Developer',
          during: '2020/5 - 2021/9',
          list: [
            'Developed a B2B Enterprise Team Cooperation system, including Project Management, Meeting Minute System and BIM/Forge Viewer Management System',
            'Established product design specifications, user interface and UI flow',
            'Improved the development process, providing UI Mockups before development',
            'Optimized user interface and operation flow through user feedbacks',
            'Used Puppeteer for end to end testing',
          ],
        },
        {
          company: 'Softall',
          title: 'Front-End Developer',
          during: '2019/8-2020/3',
          list: [
            'Restructured Event page from HTML to React.js and setup a copywriting principles by JSON for marketing',
            'Improved process of setting up banner in Home page, developing a banner setup function in B2B system for Admin',
            'Solved the Responsive Web Design problem of CSS/HTML layout and cross-browser compatibility',
            'Developed a new online resume product using React.js, TypeScript',
            'Used storybook to create project components',
          ],
        },
        {
          company: 'Citiesocial 任開媒體',
          title: 'Front-End Developer',
          during: '2018/5-2019/8',
          list: [
            'Developed member system by RESTful APIs and third-party web services APIs',
            'Optimized the marketing setup process and provide more flexible marketing tools for Marketing on Shopify',
            'Created more template modules for Marketing Event',
            'Optimized existing architecture to reduces capacity and increases 90% speed',
            'Improved user experience by tracking user behavior on Hotjar and analyzed',
            'Set Appier or others tracking SDK for Marketing',
            'Set Google Analytics Events in Google Tag Manager to tracking event effectiveness',
            'Clarified and solved problems immediately',
            'Tracked and researched web performance with Google Analytics and Google Speed',
          ],
        },
        {
          company:
            'MOMO Fubon Multimedia Technology Co., Ltd. (富邦媒體股份有限公司)',
          title: 'Engineer',
          during: '2016/8-2018/5',
          list: [
            'Developed refactoring Desktop and Mobile user interface for home page',
            'Solved the problem of CSS/HTML layout and cross-browser compatibility',
            'Parsed keywords and setting up HTML meta tags to increase SEO',
            'Tracked and researched web performance with Google Analytics and Google Speed',
          ],
        },
        {
          company: 'Skyway 天擎旅行社',
          title: 'Designer',
          during: '2015/9-2016/7',
          list: [
            'Updated and maintained travel products on website',
            'Designed banners and all of the travel routes products, like DM handbook...etc.',
            'Planed and layout the exhibition',
            'Contacted with printers or other manufacturers',
          ],
        },
        {
          company: '新曜有限公司',
          title: 'Designer and Purchasing Assistant',
          during: '2013/10-2015/8',
          list: [
            'CIS design',
            'Products photography',
            'Contacted with foreign customers by emails',
            'Processed overseas order-related business',
          ],
        },
        {
          company: 'S.H.I.T.來自臺灣的獨特內斂',
          title: 'Designer',
          during: '2009/7-2013/4',
          list: [
            'Implemented website revision by flash',
            'Maintained and updated products on website',
          ],
        },
      ],
    }
  },
}
</script>
