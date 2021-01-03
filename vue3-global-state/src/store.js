import { reactive, readonly } from 'vue'

// State
const state = reactive({
  allTasks: []
})

// Actions
function addTask (task) {
  state.allTasks.push(task)
}

function toggleCompleteTask (task) {
  const index = state.allTasks.indexOf(task)
  state.allTasks[index].isComplete = !state.allTasks[index].isComplete
}

function deleteTask (task) {
  const index = state.allTasks.indexOf(task)
  state.allTasks.splice(index, 1)
}

export default {
  state: readonly(state),
  actions: { addTask, toggleCompleteTask, deleteTask }
}
