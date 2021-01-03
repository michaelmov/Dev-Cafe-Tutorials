import { reactive, readonly } from 'vue'

// State
const state = reactive({
  allTasks: []
})

// Actions
function addTask (task) {
  state.allTasks.push(task)
}

function toggleCompleteTask (taskId) {
  const foundTask = state.allTasks.find(item => item.id === taskId)
  foundTask.isComplete = !foundTask.isComplete
}

function deleteTask (taskId) {
  const index = state.allTasks.findIndex(item => item.id === taskId)
  state.allTasks.splice(index, 1)
}

export default {
  state: readonly(state),
  actions: { addTask, toggleCompleteTask, deleteTask }
}
