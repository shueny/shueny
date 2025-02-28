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
          during: '2021/9 - 2025/3',
          list: [
            'Implemented a B2B VSOC(Vehicle Security Operations Center) platform with a monorepo structure for multiple projects with multilingual by monorepo, ReactJS, TypeScript, React-i18n and Vitest.',
            'Spearheaded the development and implementation of automated UI E2E testing procedures using Cypress and TestRail. This initiative resulted in a 50% improvement in delivery efficiency by significantly reducing defect rates prior to product release.',
            'Spearheaded the development and implementation of a custom content management system (CMS) using Wagtail CMS. This CMS empowers threat experts with centralized management of all incident data. I also architected and built a GraphQL API to facilitate seamless data retrieval and querying of incidents within the VSOC platform.',
            'Implemented a multilingual company website utilizing the Next.js, TypeScript for type safety, and i18n libraries for seamless language switching. This project prioritized SEO best practices and code optimization techniques, resulting in a 50% improvement in website rendering performance and user experience. Additionally, the website boasts faster page load times and reduced server costs.',
          ],
        },
        {
          company: 'Synttro',
          title: 'Senior Front-End Developer',
          during: '2020/5 - 2021/9',
          list: [
            'Developed a B2B Enterprise Team Collaboration System using React, React Native, and Ant Design to facilitate data management, enable real-time monitoring and control, streamline workflow processes, improve issue reporting and meeting documentation for construction companies, enhancing 60% overall collaboration and efficiency.',
            'Optimized the user interface and operation flow using Ant Design Pro, integrating a unified design system based on user feedback. This enhancement improved user experience and satisfaction while driving team-oriented solutions.',
            'Utilized Puppeteer for end-to-end testing, over 80% test coverage to ensure product quality and deliver a reliable user experience.',
          ],
        },
        {
          company: 'Citiesocial',
          title: 'Front-End Developer',
          during: '2018/5-2019/8',
          list: [
            'Developed and customized the Shopify e-commerce shop to align with client branding and business requirements across a multi-country market.',
            'Led and built a product landing page with multiple templates and designed a workflow with a UI designer. Significantly improved time on releasing new product page from 2 weeks to a day.',
            'Implemented a user behavior tracking system using Hotjar, a leading user experience (UX) analytics tool. This initiative provided valuable insights into how users interact with our website, allowing us to optimize the user experience through data-driven decisions.',
            'Leveraged Google Tag Manager and Google Analytics to empower data-driven decision-making, by tracking data and capturing granular user behavior data and gaining invaluable insights to support the optimization of marketing campaigns and strategies, resulting in a 40% increase in conversion rates and marketing ROI.',
          ],
        },
        {
          company: 'MOMO Fubon Multimedia Technology Co., Ltd.',
          title: 'Engineer',
          during: '2016/8-2018/5',
          list: [
            'Refactored the desktop and mobile user interface for the homepage, product page and shopping cart optimizing the user interface with JavaScript and jQuery.',
            'Leveraged GA data to observe user search behavior, display relevant keywords as suggestions, and personalize search results for an optimized user search experience.',
            'Optimized product SEO pages with relevant keywords, structure, and sitemaps to propel the website to the top of search results, consistently securing first-page rankings and driving organic traffic.',
          ],
        },
        {
          company: 'Skyway Travel Agency',
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
          company: 'TUKEEN Co., Ltd.',
          title: 'Designer and Purchasing Assistant',
          during: '2013/10-2015/8',
          list: [
            'CIS design',
            'Products photography',
            'Contacted with foreign customers by emails',
            'Processed overseas order-related business',
          ],
        },
      ],
    }
  },
}
</script>
