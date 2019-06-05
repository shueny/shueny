<template>
    <div class="nav-wrapper effect" :class="{ 'nav-sticky': showNavbar }">
        <nav class="navbar-custom">
            <router-link to="/" class="navbar-brand effect font-weight-bold">Shueny</router-link>
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <font-awesome-icon icon="bars" />
                </button>
            </div>
        </nav>
        <div class="navbar-collapse navbar-right effect in" id="bm-navbar" aria-expanded="false">
            <ul class="nav navbar-nav">
              <li :id="'nav-'+item.link.toLowerCase()" class="" v-for="(item, index) in sectionLink" :key='index'>
                <a :href="'#'+ item.link.toLowerCase()" class="scroll effect p-2"
                :data-speed="item.scrollSpeed"
                :class="{'active' : (item.link.toLowerCase() === data) }">{{ item.item }}</a>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ImgLogo from '../assets/images/logo-shueny.png'
import ImgPicBg from '../assets/images/header-bg.jpg'
import ImgLogoS from '../assets/images/Shueny.png'

export default {
  name: 'NavBar',
  props: ['data'],
  data () {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
      isActive: false,
      imgLogo: ImgLogo,
      imgBg: ImgPicBg,
      imgLogoS: ImgLogoS,
      logo: '../assets/images/logo-web.png',
      icons: ['bars', 'envelope'],
      contact: [
        {
          icon: 'mobile-alt',
          data: '0911241129'
        },
        {
          icon: 'envelope',
          data: 'shuen29@gmail.com'
        }
      ],
      sectionLink: [
        {
          item: 'About',
          link: 'About',
          scrollSpeed: 800
        },
        {
          item: 'Skill',
          link: 'Skill',
          scrollSpeed: 800
        },
        {
          item: 'Work',
          link: 'Work',
          scrollSpeed: 1400
        },
        {
          item: 'Experience & Education',
          link: 'experienceAndEducation',
          scrollSpeed: 1400
        }
        // ,
        // {
        //   item: 'Sepcial',
        //   link: 'Sepcial',
        //   scrollSpeed: 1700
        // },
        // {
        //   item: 'Contact',
        //   link: 'Contact',
        //   scrollSpeed: 1700
        // }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // const sectionBlock = Object.values(this.sectionLink).map(item => item.item.toLowerCase())
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      const kvTyperHeight = document.getElementById('kvTyper').offsetHeight
      if (currentScrollPosition < 0) {
        return this.showNavbar = false
      }
      if (currentScrollPosition < kvTyperHeight) {
        return this.showNavbar = false
      }
      this.showNavbar = currentScrollPosition > kvTyperHeight
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
