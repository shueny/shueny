<template>
  <div class="kv kv-typer" :style="{backgroundImage: 'url(' + imgPicBg + ')' }">
    <div class="page-table">
      <div class="table-cell text-center">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="typer-title"><vue-typer :text="['I am a Front-End Developer','Photography and Travel lover']"></vue-typer></h2>
          <a href="#about" class="scroll home-s-btn hor-center"><span class="dot center"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import ImgPicBg from '../assets/images/head-bg.jpg'
import ImgName from '../assets/images/logo-name.png'

export default {
  name: 'KVTyper',
  props: ['title'],
  components: { VueTyper },
  data () {
    return {
      imgPicBg: ImgPicBg,
      imgName: ImgName,
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
      worksLink: [
        {
          iconName: 'github',
          link: 'https://github.com/shueny'
        },
        {
          iconName: 'github-alt',
          link: 'https://shueny.github.io/'
        },
        {
          iconName: 'wordpress',
          link: 'https://mango-pizza.life'
        },
        {
          iconName: 'codepen',
          link: 'https://codepen.io/Shueny/'
        }
      ]
    }
  }
}
</script>
<style>
.vue-typer .custom.char.typed {
  color: #bfbfbf;
}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.kv {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  color: $white;
  background-color: $white;
  background-size: cover;
  background-position: center;
  margin-top: 44px;

  a {
    color: $dark-grey;
  }

  .logo-name {
    @include phone-width() {
      padding-left: calc(3rem + 15px);
    }
  }

  img {
    @include phone-width() {
      max-width: 200px;
    }
  }

  &-typer {
    color: $white;
    .page-table {
      display: table;
      width: 100%;
      height: 100%;
    }

    .table-cell {
      position: relative;
      display: table-cell;
      vertical-align: middle;
      padding-top: 20px;
      z-index: 5;
    }

    h1 {
      font-family: 'Lato';
      color: $white;
      font-size: $font4*12;
    }
    h2 {
      font-size: $font4*7;
    }
    .home-s-btn {
      display: block;
      bottom: $font4*20;
      height: $font4*10;
      width: $font4*7;
      border: 2px solid $white;
      -webkit-border-radius: $font4*4;
      -moz-border-radius: $font4*4;
      border-radius: $font4*4;
      .dot {
        display: block;
        height: $font4*2 - 2px;
        width: $font4*2 - 2px;
        background-color: #efefef;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-animation: dot-animation 1.8s infinite ease-in-out;
        -moz-animation: dot-animation 1.8s infinite ease-in-out;
        animation: dot-animation 1.8s infinite ease-in-out;
      }
      .center {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
    .hor-center {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
}
.effect {
  -webkit-transition: all .4s ease-in-out;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

@-webkit-keyframes dot-animation {
0% {
  top: calc(50% - 6px);
  opacity: 1;
}
40% {
  top: 50%;
  opacity: 0;
}
100% {
  top: calc(50% - 6px);
  opacity: 0;
}
}
@-moz-keyframes dot-animation {
0% {
  top: calc(50% - 6px);
  opacity: 1;
}
40% {
  top: 50%;
  opacity: 0;
}
100% {
  top: calc(50% - 6px);
  opacity: 0;
}
}
@keyframes dot-animation {
0% {
  top: calc(50% - 6px);
  opacity: 1;
}
40% {
  top: 50%;
  opacity: 0;
}
100% {
  top: calc(50% - 6px);
  opacity: 0;
}
}
</style>
