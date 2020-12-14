<template>
  <contact-header @search="searchContact" />
  <section class="contacts">
    <contact-card v-for="(contact, idx) in filteredContacts"
      :key="contact.name.first + idx"
      :contact="contact" />
  </section>
</template>

<script>
import ContactHeader from './components/ContactHeader'
import ContactCard from './components/ContactCard'

export default {
  name: 'App',
  components: { ContactHeader, ContactCard },
  data () {
    return {
      isLoading: false,
      contacts: [],
      search: ''
    }
  },
  computed: {
    filteredContacts () {
      return this.contacts.filter(contact => {
        const fullName = `${contact.name?.first?.toLowerCase()} ${contact.name?.last?.toLowerCase()}`
        return fullName.includes(this.search.toLowerCase())
      })
    }
  },
  async mounted () {
    this.contacts = await this.fetchUsers()
  },
  methods: {
    searchContact (query) {
      this.search = query
    },
    async fetchUsers () {
      try {
        this.isLoading = true
        const response = await fetch('https://randomuser.me/api/?results=50&nat=US')
        const users = await response.json()
        return users.results
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
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
