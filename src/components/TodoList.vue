<template>
  <li class="list-group-item text-left">
      <div class="d-flex">
        <div class="form-check">
          <label class="form-check-label" :class="{'completed': item.completed }">{{ item.title }}
            <input class="form-check-input" type="checkbox" v-model="item.completed" :id="item.id"/><span class="checkmark"></span>
          </label>
        </div>
        <button class="close ml-auto" type="button" aria-label="Close" @click="removeTodo(item)"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="btnArea">
        <button type="button" class="btn btn-default btn-calendar"><font-awesome-icon icon="calendar-alt"/></button>
        <button type="button" class="btn btn-default btn-file"><font-awesome-icon icon="file-alt"/></button>
        <button type="button" class="btn btn-default btn-edit" :key='item.index' @click="editTodo(item)"><font-awesome-icon icon="edit"/></button>
      </div>
      <input class="form-control" type="text" v-model="cacheTodoTitle" @keyup.esc="cancelEdit()" @keyup.enter="doneEdit(item)"/>
  </li>
</template>
<script>
export default {
  name: 'TodoList',
  props: ['item'],
  data () {
    return {
      cacheTodo: {},
      cacheTodoTitle: ''
    }
  },
  methods: {
    cancelEdit(item) {
      this.$emit('cancel-edit', item)
    },
    removeTodo (item) {
      this.$emit('remove-todo', item)
    },
    editTodo (item) {
      this.$emit('edit-todo', item)
    },
    doneEdit (item) {
      this.$emit('done-edit', item)
    },
    deleteTodos () {
      this.$emit('delete-todo', item)
    }
  }
}
</script>
