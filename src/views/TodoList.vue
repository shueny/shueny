<template>
  <div class="app-todo">
    <div class="container">
      <section class="header">
        <div class="text">
          <span class="day" v-text="day"> </span>
          <span class="yearMonth"><b class="year" v-text="year"></b><b class="month" v-text="month"> </b></span>
          <span v-text="timeMessage"></span><span class="week" v-text="currentWeek"> </span>
        </div>
      </section>
      <section class="addTask">
        <input placeholder="+ Add task" v-model="newTodo" @keyup.enter="addTodo"/>
          <a class="btn btn--add" @click="addTodo">+</a>
      </section>
      <section class="content">
        <ul class="todoList">
          <li class="list-group-item text-left" v-for='item in filteredTodos' :key='item' @dblclick="editTodo(item)">
            <div class="d-flex" v-if="item.id !== cacheTodo.id">
              <div class="form-check">
                <label class="form-check-label" :class="{'completed': item.completed }" :for="item.id">{{ item.title }}
                  <input class="form-check-input" type="checkbox" v-model="item.completed" :id="item.id"/><span class="checkmark"></span>
                </label>
              </div>
              <button class="close ml-auto" type="button" aria-label="Close" @click="removeTodo(item)"><span aria-hidden="true">&times;</span></button>
            </div>
            <input class="form-control" type="text" v-model="cacheTodoTitle" @keyup.esc="cancelEdit()" @keyup.enter="doneEdit(item)" v-if="item.id === cacheTodo.id"/>
          </li>
        </ul>
      </section>
      <div class="filters">
        <button class="btn filters__btn filters__btn--all" :class="{'active': visibility == 'all'}" @click="visibility = 'all'">All</button>
        <button class="btn filters__btn filters__btn--complete" :class="{'active': visibility == 'completed'}" @click="visibility = 'completed'">Complete</button>
        <button class="btn filters__btn filters__btn--incomplete" :class="{'active': visibility == 'doing'}" @click="visibility = 'doing'">Incomplete</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
@import '@/assets/scss/_variables.scss';

.app-todo {
  .container {
    max-width: 375px;
    margin: ($font4 *3 - 2px) auto;
    border: 1px solid $orange;
    padding: 0;
    border-radius: 0.5em;
    overflow: hidden;
    font-family: $font-family;

    .header {
      max-height: $font4 * 15;
      padding: $font4 *4;
      background: $orange;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;

      .text {
        height: $font4 * 8 - 2px;
        text-align: left;
        line-height: $font4 * 8 - 2px;
        font-family: $font-family;
        color: $dark-grey;

        span {
          margin-right: 5px;
          display: inline-block;

          &:last-child {
            margin-right: 0;
          }
          &.day {
            font-size: $font4 *9;
            font-weight: bold;
          }

          &.week {
            font-size: $font4 * 6;
            float: right;
          }
          b {
            display: block;
            line-height: $font4 * 4;
            font-weight: normal;
          }
        }
      }
    }
    .addTask {
      padding: $font4 * 2 - 2px;
      position: relative;

      input {
        width: 100%;
        height: $font4* 9 - 1px;
        border-radius: $font4 * 5;
        border: 1px solid $orange;
        padding-right: $font4 * 10;
        padding-left: $font4 * 3 - 2px;
        -webkit-appearance: none;
        outline: 0px;
        color: lighten($dark-grey,30%);

        &:focus {
          width: 100%;
          height: $font4 * 8;
          border-radius: $font4 * 8;
          border: 1px solid $orange;
        }
      }
    }
    .btn {
      width: $font4 * 9 - 2px;
      height: $font4 * 9 - 2px;
      background: $orange;
      border-radius: 50%;
      color: $white;
      font-weight: bold;
      font-size: $font4 * 8 - 2px;
      line-height: $font4 * 4;
      padding: $font4*2 ($font4*2 + 1px);
      right: $font4 * 2 - 2px;
      transition: 250ms ease-out;

      &:hover,
      &:focus {
        color: #fff;
        background: darken($orange, 25%);
      }
      &--add {
        position: absolute;
        box-shadow: 1px 1px $font4 $light-grey;
        border: 0px;
        color: $white !important;
        top: $font4*2 - 2px;
      }

      &.filters__btn {
        width: auto;
        height: auto;
        background: $white;
        border: 1px solid $dark-grey;
        color: lighten($dark-grey,25%);
        display: inline-flex;
        justify-content: space-around;
        font-size: $font4*4;
        border: 1px solid lighten($dark-grey,25%);
        border-radius: $font4*6;
        font-weight: normal;

        &--add {
          margin: 0;
        }

        &:hover {
          color: $white;
          background: lighten($dark-grey,35%);
        }
        &.active {
          color: $white;
          border-color: $white;
          background: $orange;
        }
      }
    }
    .filters {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 0 1rem 1.5rem 1rem;
    }

    .todoList {
      padding: 10px;
    }

    .list-group-item {
      border-radius: 0;
      border: 0;
      border-bottom: 1px solid lighten($dark-grey, 50%);
      padding-right: 0.4rem;
      padding-left: 0;
      background: rgba($white, 0);

      .form-check {
        width: 100%;
        padding: 0;

        &:hover input ~ .checkmark {
          background-color: darken($orange, 20%);
        }
        input:checked ~ .checkmark {
          background-color: $orange;
          &:after {
            display: block;
          }
        }

        &-input {
          height: 0;
          width: 0;
        }
        &-label {
          width: 100%;
          padding-left: $font4*7;
          position: relative;

          .checkmark {
            position: absolute;
            top: $font4 - 2px;
            left: 0;
            height: $font4 * 5;
            width: $font4 * 5;
            background-color: lighten($dark-grey,40%);
            border-radius: $font4;

            &:after {
              content: '';
              position: absolute;
              display: none;
            }
          }

          &.completed {
            text-decoration: line-through;
            color: lighten($dark-grey,30%);
            .checkmark {
              &::after {
                left: $font4 *2 - 1px;
                top: $font4 - 2px;
                width: $font4* 2 - 1px;
                height: $font4*3;
                border: solid $white;
                border-width: 0 3px 3px 0;
                //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                transform: rotate(45deg);
                animation: check 0.5s ease-in-out;
              }
            }
          }
        }
      }
    }
  }

  @keyframes check {
    0% {
      height: 0;
      width: 0;
    }
    25% {
      height: 0;
      width: $font4* 2 - 1px;
    }
    50% {
      height: $font4 * 5;
      width: $font4* 2 - 1px;
    }
  }
}
</style>

<script>
const moment = require('moment')

const STORAGE_KEY = 'todos-vuejs'// 名稱
var todoStorage = {
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach((todo, index) => {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'TodoList',
  data () {
    return {
      newTodo: '',
      todos: [
        {
          id: '11',
          title: '要買蘿蔔',
          completed: false
        }
      ],
      cacheTodo: {},
      cacheTodoTitle: '',
      visibility: 'all',
      day: moment().format('DD'),
      year: moment().format('YYYY'),
      month: moment().format('MMM'),
      currentWeek: moment().format('ddd'),
      timeMessage: moment().format('LTS')
    }
  },
  methods: {
    getTodos () {
      if (localStorage.getItem('todos-vuejs')) {
        this.todos = JSON.parse(localStorage.getItem('todos-vuejs'))
      }
    },
    addTodo (e) {
      // validation check
      if (this.newTodo) {
        this.todos.unshift({
          id: this.todos.length,
          title: this.newTodo,
          completed: false
        })
      }
      // reset newTodo
      this.newTodo = ''
      // save the new item in localstorage
      return true
    },
    removeTodo (todo) {
      const vm = this
      // findIndex 是個比較簡單找到 index 的方式，會把回傳為 true 的 index 位置，存到前方(newIndex)的變數之中
      const newIndex = vm.todos.findIndex((item, key) => todo.id === item.id)
      this.todos.splice(newIndex, 1)
    },
    editTodo (item) {
      console.log(item)
      this.cacheTodo = item
      this.cacheTodoTitle = item.title
    },
    cancelEdit () {
      this.cacheTodo = {}
    },
    doneEdit (item) {
      item.title = this.cacheTodoTitle
      this.cacheTodoTitle = ''
      this.cacheTodo = {}
    },
    deleteTodos () {
      this.todos = []
    },
    updateCurrentTime () {
      this.timeMessage = moment().format('LTS')
    }
  },
  computed: {
    filteredTodos () {
      if (this.visibility === 'all') {
        return this.todos
      } if (this.visibility === 'doing') {
        var newTodo = []
        this.todos.forEach((item) => {
          if (!item.completed) {
            newTodo.push(item)
          }
        })
        return newTodo
      } if (this.visibility === 'completed') {
        newTodo = []
        this.todos.forEach((item) => {
          if (item.completed) {
            newTodo.push(item)
          }
        })
        return newTodo
      }
    },
    remaining () {
      return this.todos.filter(item => !item.completed)
    }
  },
  mounted () {
    this.getTodos()
  },
  watch: {
    todos: {
      handler (updatedList) {
        localStorage.setItem('todos-vuejs', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  created () {
    this.timeMessage = moment().format('LTS')
    setInterval(() => this.updateCurrentTime(), 1 * 1000)
  }
}
</script>
