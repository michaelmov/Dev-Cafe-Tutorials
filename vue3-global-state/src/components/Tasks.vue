<template>
  <div class="h-96 max-h-96 p-8 bg-white overflow-auto rounded-md">
    <add-task-input class="mb-8" @add-task="addTask" />
    <p v-if="!tasks || tasks.length < 1" class="text-center text-gray-400">No tasks available</p>
    <task-item v-else v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import AddTaskInput from './AddTaskInput'
import TaskItem from './TaskItem'

export default {
  name: 'tasks',
  components: { AddTaskInput, TaskItem },
  props: {
    tasks: Array
  },
  setup (props, { emit }) {
    function addTask (item) {
      emit('add-task', item)
    }

    return { addTask }
  }
}
</script>

<style>

</style>
