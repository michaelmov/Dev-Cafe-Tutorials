<template>
  <main class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 class="text-5xl mb-8 text-gray-700">Your Tasks</h1>
    <tasks class="md:w-1/3 w-full" />
  </main>
</template>

<script>
import tasks from './components/Tasks'

export default {
  name: 'app',
  components: { tasks }
}
</script>
