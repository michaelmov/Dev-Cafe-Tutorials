<template>
  <div class="bg-gray-200 px-4 py-2 mb-2 flex relative items-center rounded-md">
    <input :checked="task.isComplete"
      @change="toggleTaskCompletion"
      type="checkbox"
      name="task"
      class="form-checkbox h-5 w-5 text-green-600 cursor-pointer">
    <label for="task" class="ml-4 w-full">
      <span v-if="task.isComplete"><s>{{ task.title }}</s></span>
      <span v-else>{{ task.title }}</span>
      <div @click="onDeleteClick"
        class="absolute flex items-center right-0 top-0 px-2 h-full cursor-pointer hover:bg-gray-300 rounded-r-md transition-colors">
        <delete-icon class=" h-6" />
      </div>
    </label>
  </div>
</template>

<script>
import Task from '../models/Task'
import DeleteIcon from './DeleteIcon'
import store from '../store'

export default {
  name: 'task-item',
  components: { DeleteIcon },
  props: { task: Task },
  setup (props) {
    const { toggleCompleteTask, deleteTask } = store.actions

    function toggleTaskCompletion () {
      toggleCompleteTask(props.task)
    }

    function onDeleteClick () {
      deleteTask(props.task)
    }

    return { toggleTaskCompletion, onDeleteClick }
  }
}
</script>

<style>

</style>
