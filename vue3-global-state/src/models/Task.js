export default class Task {
  constructor (task) {
    this.id = task.id || this.makeId(10)
    this.title = task.title || ''
    this.isComplete = task.isComplete || false
  }

  makeId (length) {
    let id = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return id
  }
}
