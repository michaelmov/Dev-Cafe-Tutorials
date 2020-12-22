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
// 1. We'll import a method called a ref...
import { ref } from 'vue'

export default {
  // 2. Call "setup" method and pass a props argument into it.
  setup (props, { emit }) {
    // 3. searchQuery will be initialized with a ref
    const searchQuery = ref('')

    // 4. Create a regular ol' function. No need for a methods: objects
    function onSearchChange () {
      emit('search', searchQuery.value)
    }

    // 5. Anyting we return here will be available in our template above.
    return {
      searchQuery,
      onSearchChange
    }

    // 6. We can already see an advantage here, with organizing code and grouping code in no specific order.
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
