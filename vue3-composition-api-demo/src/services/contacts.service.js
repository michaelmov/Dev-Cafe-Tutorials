async function getUsers () {
  const response = await fetch('https://randomuser.me/api/?results=50&nat=US')
  const users = await response.json()
  return users.results
}

export { getUsers }
