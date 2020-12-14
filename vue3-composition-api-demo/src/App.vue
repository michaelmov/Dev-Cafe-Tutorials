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

import ContactHeader from './components/ContactHeader'
import ContactCard from './components/ContactCard'
import { getContacts } from './services/contacts.service'
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'App',
  components: { ContactHeader, ContactCard },
  setup (props) {
    const isLoading = ref(false)

    const search = ref('')
    function searchContact (query) {
      search.value = query
    }

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
    onMounted(fetchContacts)

    const filteredContacts = computed(() => {
      return contacts.value.filter(contact => {
        const fullName = `${contact.name?.first} ${contact.name?.last}`
        return fullName.toLowerCase().includes(search.value.toLowerCase())
      })
    })

    return {
      isLoading,
      contacts,
      search,
      filteredContacts,
      searchContact
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
