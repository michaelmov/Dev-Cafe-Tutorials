<template>
  <div class="h-96 max-h-96 p-8 bg-white overflow-auto rounded-md">
    <add-task-input class="mb-8" @add-task="addTask" />
    <p v-if="!allTasks || allTasks.length < 1" class="text-center text-gray-400">No tasks available</p>
    <task-item v-else v-for="task in allTasks" :key="task.id" :task="task" @toggle-complete="toggleCompleteTask" />
  </div>
</template>

<script>
import AddTaskInput from './AddTaskInput'
import TaskItem from './TaskItem'
import { ref } from 'vue'

export default {
  name: 'tasks',
  components: { AddTaskInput, TaskItem },
  setup (props) {
    const allTasks = ref([])

    function addTask (task) {
      allTasks.value.push(task)
    }

    function toggleCompleteTask (taskId) {
      const foundTask = allTasks.value.find(item => item.id === taskId)
      foundTask.isComplete = !foundTask.isComplete
    }

    return { allTasks, addTask, toggleCompleteTask }
  }
}
</script>

<style>

</style>
