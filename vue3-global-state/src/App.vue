<template>
  <main class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 class="text-5xl mb-8 text-gray-700">Your Tasks</h1>
    <tasks class="md:w-1/3 w-full" :tasks="allTasks" @add-task="addTask" />
  </main>
</template>

<script>
import tasks from './components/Tasks'
import { ref } from 'vue'

export default {
  name: 'app',
  components: { tasks },
  setup (props) {
    const allTasks = ref([])

    function addTask (task) {
      allTasks.value.push(task)
    }

    return { allTasks, addTask }
  }
}
</script>
