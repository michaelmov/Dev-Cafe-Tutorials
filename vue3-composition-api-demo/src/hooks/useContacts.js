import { ref, onMounted, computed } from 'vue'
import { getContacts } from './../services/contacts.service'

export default function useContacts () {
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
  onMounted(fetchContacts)

  return {
    isLoading,
    filteredContacts,
    search
  }
}
