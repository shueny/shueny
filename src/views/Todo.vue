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
        <div>
          <ul class="todoList">
            <TodoList 
             v-for='item in filteredTodos' 
             :index='item.index' 
             :item='item' 
             @cancel-item='cancelEdit'
             @remove-todo='removeTodo'
             @edit-todo='editTodo'
             @done-edit='done-edit'
             @delete-todo='deleteTodos'
            ></TodoList>
            <!-- <li class="list-group-item text-left" v-for='item in filteredTodos' :key='item' @dblclick="editTodo(item)">
              <div class="d-flex" v-if="item.id !== cacheTodo.id">
                <div class="form-check">
                  <label class="form-check-label" :class="{'completed': item.completed }" :for="item.id">{{ item.title }}
                    <input class="form-check-input" type="checkbox" v-model="item.completed" :id="item.id"/><span class="checkmark"></span>
                  </label>
                </div>
                <button class="close ml-auto" type="button" aria-label="Close" @click="removeTodo(item)"><span aria-hidden="true">&times;</span></button>
              </div>
              <input class="form-control" type="text" v-model="cacheTodoTitle" @keyup.esc="cancelEdit()" @keyup.enter="doneEdit(item)" v-if="item.id === cacheTodo.id"/>
            </li> -->
          </ul>
        </div>
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
@import '@/assets/scss/_todo.scss';
</style>

<script>
import TodoList from '@/components/TodoList'

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
  name: 'Todo',
  components: { TodoList },
  data () {
    return {
      newTodo: '',
      todos: [
        {
          id: '11',
          title: '要買蘿蔔',
          completed: false,
          comments: ['6:00pm', 'the new restaurant']
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
    updateCurrentTime () {
      this.timeMessage = moment().format('LTS')
    },
    cancelEdit() {
      this.cacheTodo = {}
    },
    removeTodo (todo) {
      const vm = this
      // findIndex 是個比較簡單找到 index 的方式，會把回傳為 true 的 index 位置，存到前方(newIndex)的變數之中
      const newIndex = vm.todos.findIndex((item, key) => todo.id === item.id)
      this.todos.splice(newIndex, 1)
    },
    editTodo (item) {
      console.log(item.title)
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
