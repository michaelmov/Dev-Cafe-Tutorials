<template>
  <form @submit.prevent="inputIsSubmitted" class="w-full flex">
    <input v-model="task"
      type="text"
      class="w-full border-green-600 border-solid border rounded-l-md px-2">
    <button type="submit"
      class="bg-green-600 text-white px-4 py-2 w-40 rounded-r-md">Add Task</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import Task from './../models/Task'
import store from '../store'

export default {
  name: 'add-task-input',
  setup (props) {
    const task = ref('')

    function inputIsSubmitted (evt) {
      if (task.value.trim()) {
        const newTask = new Task({ title: task.value })
        store.actions.addTask(newTask)
        task.value = ''
      }
    }

    return { task, inputIsSubmitted }
  }
}
</script>

<style>

</style>
