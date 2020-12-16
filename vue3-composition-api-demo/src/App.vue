<template>
  <contact-header @search="searchContact" />
  <section class="contacts">
    <contact-card v-for="(contact, idx) in filteredContacts"
      :key="contact.name.first + idx"
      :contact="contact" />
  </section>
</template>

<script>
// 1. Create all refs and group them together
// 2. Move refs close to corresponding methods and explain grouping advantage
// 3. Create all methods
// 4. Refactor contacts to useContacts hook to show where things get interesting with codd reusability
// 5. Talk about how this is different from mixins

import { ref, computed, onMounted } from 'vue'
import ContactHeader from './components/ContactHeader'
import ContactCard from './components/ContactCard'
import { getContacts } from './services/contacts.service'
// import useContacts from './hooks/useContacts'

export default {
  name: 'App',
  components: { ContactHeader, ContactCard },
  setup (props) {
    onMounted(fetchContacts)
    // const { isLoading, search, filteredContacts } = useContacts()
    const search = ref('')
    const isLoading = ref(false)

    const contacts = ref([])
    async function fetchContacts () {
      try {
        isLoading.value = true
        contacts.value = await getContacts()
      } catch (error) {
        console.log(error)
      } finally {
        isLoading.value = false
      }
    }
    const filteredContacts = computed(() => {
      return contacts.value.filter(contact => {
        const fullName = `${contact.name?.first} ${contact.name?.last}`
        return fullName.toLowerCase().includes(search.value.toLowerCase())
      })
    })

    function searchContact (query) {
      search.value = query
    }

    return {
      search,
      filteredContacts,
      searchContact,
      isLoading
    }
  }
}
</script>

<style lang="postcss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #eeeeee;
}

.contacts {
  padding: 4rem 2rem;
  display: grid;
  width: 100%;
  max-width: 1400px;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 1.5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
