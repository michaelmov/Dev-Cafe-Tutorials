<template>
  <div class="bg-gray-200 px-4 py-2 mb-2 flex items-center cursor-pointer rounded-md hover:bg-gray-300 transition-all"
    @click="toggleTaskCompletion">
    <input v-model="task.isComplete"
      type="checkbox"
      name="task"
      class="form-checkbox h-5 w-5 text-green-600 cursor-pointer">
    <label for="task" class="ml-4 cur">
      <span v-if="task.isComplete"><s>{{ task.title }}</s></span>
      <span v-else>{{ task.title }}</span>
    </label>
  </div>
</template>

<script>
import Task from '../models/Task'

export default {
  name: 'task-item',
  props: { task: Task },
  setup (props) {
    function toggleTaskCompletion () {
      props.task.isComplete = !props.task.isComplete
    }
    return { toggleTaskCompletion }
  }
}
</script>

<style>

</style>
