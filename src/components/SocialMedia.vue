<template>
    <div class="social-icon">
      <ul>
        <li class="social-icon-item d-inline-flex mr-2" v-for='item in socialMedia' :key='item.index' >
          <a :href="item.link" target="_blank"
            class="btn btn-link">
                <font-awesome-icon :icon="['fab',item.iconName]" />{{ item.item }}
          </a>
        </li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";

.social-icon {
  &-item {
    a {
      display: inline-block;
      font-size: $font4*4;
      width: $font4*10;
      height: $font4*10;
      text-align: center;
      line-height: $font4*8;
      color: $dark-grey;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid $dark-grey;
      svg {
          vertical-align: initial;
      }
      &:hover {
        background-color: $dark-grey;
        color: $white;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'SocialMedia',
  data () {
    return {
      socialMedia: [
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
