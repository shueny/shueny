<template>
  <div class="hello">
    <div class="container">
      <div class="title">
        <h2>{{ title }}</h2>
        <h3>{{ subTitle }}</h3>
      </div>
      <div class="row">
        <div class="card col-md-4" v-for="list in works" :key="list.index">
          <img :src="list.image" class="card-img-top" :alt="list.title">
          <div class="card-body">
            <h5 class="card-title">{{ list.title }}</h5>
            <p class="card-text">{{ list.subTitle }}</p>
            <a :href="list.link" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
      works: [
        {
          title: '爬格子',
          tags: ['jQuery'],
          image: '../assets/images/works/climb-stairs.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: '../assets/images/works/vue-todo-1.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: '爬格子',
          tags: ['jQuery'],
          image: '../assets/images/works/climb-stairs.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: '../assets/images/works/vue-todo-1.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: '爬格子',
          tags: ['jQuery'],
          image: '../assets/images/works/climb-stairs.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        },
        {
          title: 'ToDo List',
          tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
          image: '../assets/images/works/vue-todo-1.jpg',
          link: 'https://shueny.github.io/climbstairs-game/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
