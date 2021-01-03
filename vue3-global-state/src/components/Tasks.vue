<template>
  <div class="h-96 max-h-96 p-8 bg-white overflow-auto rounded-md">
    <add-task-input class="mb-8"/>
    <p v-if="allTasks?.length < 1" class="text-center text-gray-400">No tasks available</p>
    <task-item v-else v-for="task in allTasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import store from '../store'
import AddTaskInput from './AddTaskInput'
import TaskItem from './TaskItem'

export default {
  name: 'tasks',
  components: { AddTaskInput, TaskItem },
  setup (props, { emit }) {
    const { allTasks } = store.state

    return { allTasks }
  }
}
</script>

<style>

</style>
