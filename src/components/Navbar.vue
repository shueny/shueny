<template>
    <div class="nav-wrapper effect" :class="{ 'nav-sticky': !showNavbar }">
        <nav class="navbar-custom">
            <router-link to="/" class="navbar-brand effect px-2 font-weight-bold">Shueny</router-link>
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <font-awesome-icon icon="bars" />
                </button>
            </div>
            <div class="navbar-collapse navbar-right" id="bm-navbar" aria-expanded="false">
                <ul class="nav navbar-nav">
                    <li class="mx-2" v-for="(item, index) in sectionLink" :key='item.index'>
                        <a :href="'#'+ item.item.toLowerCase()" class="scroll effect p-2" data-speed="800" :class="{'active': item.index === 0}">{{ item.item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import ImgLogo from '../assets/images/logo-shueny.png'
import ImgPicBg from '../assets/images/header-bg.jpg'
import ImgLogoS from '../assets/images/Shueny.png'

export default {
  name: 'NavBar',
  data () {
    return {
      showNavbar: true,
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
          item:'About',
          scrollSpeed: 800
        },
        {
          item: 'Skill',
          scrollSpeed: 800
        },
        {
          item:'Work',
          scrollSpeed: 1400
        },
        {
          item: 'Experience',
          scrollSpeed: 1400
        },
        {
          item:'Sepcial',
          scrollSpeed: 1700
        },
        {
          item: 'Contact',
          scrollSpeed: 1700
        }
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
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.effect {
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.nav-wrapper {
  height: $font4*11;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
  background-color: transparent;
  padding: $font4 $font4*2;
	z-index: 20;
	.navbar {
		position: relative;
		min-height: 50px;
    &-custom {
      color: $white;
      a {
        color: $white;
        font-size: $font4*6;
      }
      img {
        width: auto;
        height: $font4*9;
        max-height: $font4*10;
      }
    }
    &-nav {
      display: inline-block;
      li {
        color: $dark-grey;
        display: inline-block;
        @include phone-width() {
          display: block;
        }
        a {
          color: $dark-grey;
          &::after {
            background-color: $dark-grey;
          }
        }
      }
    }
    &-right {
      text-align: right;
    }
    &-toggle {
      position: relative;
      float: right;
      margin-top: 8px;
      margin-right: 15px;
      margin-bottom: 8px;
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }
	}
	.navbar-brand {
		display: block;
		font-weight: 700;
		color: $dark-grey;
		float: left;
    padding: 0 $font4;
	}
	.nav {
		li {
      color: $white;
      a {
        position: relative;
        font-size: 13px;
        font-weight: 700;
        color: $white;

        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 6px;
          left: 10%;
          background-color: $white;
          //Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
          transition: all .28s ease-in-out;
        }
        &:hover {
          background-color: transparent;
          text-decoration: none;

          &::after {
            width: 80%;
          }
        }
      }
    }
	}
	.navbar-toggle .icon-bar {
		background-color: $white;
	}
}
.nav-sticky {
	background-color: $white !important;
  box-shadow: 0px -1px $font4*2 rgba(0,0,0,0.2);
	.navbar {
    &-custom {
      a {
        color: $dark-grey;
      }
    }
	}
  .nav {
    li {
      a {
        color: $dark-grey;
      }
    }
  }
  .navbar {
    &-toggle {
      color: $dark-grey;
    }
  }
}

.navbar-header {
  display: none;
  @include phone-width() {
    display: block;
  }

  width: 100%;
  text-align: right;

  button {

  }
}
#bm-navbar {
  @include phone-width() {
    display: none;
  }

  &.show {
    @include phone-width() {
      display: block;
    }
  }
}
</style>
