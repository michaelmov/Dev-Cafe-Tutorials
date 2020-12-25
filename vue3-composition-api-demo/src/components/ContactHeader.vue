<template>
  <header class="header">
    <h1>My Contacts</h1>
    <input class="search"
      v-model="searchQuery"
      @input="onSearchChange"
      type="text"
      name="search"
      id="search"
      placeholder="Search contacts">
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup (props, { emit }) {
    const searchQuery = ref('')

    function onSearchChange () {
      emit('search', searchQuery.value)
    }

    return {
      searchQuery,
      onSearchChange
    }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    width: 100%;
    height: 300px;
    color: white;
    letter-spacing: 0.4rem;
    background: linear-gradient(to right, #6A82FB, #FC5C7D);
    display: grid;
    justify-items: center;
    grid-template-rows: 4fr 1fr;
    grid-template-columns: 1fr;

    h1 {
      align-self: center;
    }
  }

  .search {
    min-width: 200px;
    align-self: center;
    width: 50%;
    height: 2rem;
    padding: 0 0.5rem;
  }
</style>
