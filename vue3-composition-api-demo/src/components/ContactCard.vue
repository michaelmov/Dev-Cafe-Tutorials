<template>
  <div class="contact-card">
    <img class="avatar" :src="contact.picture.medium" :alt="`Photo of ${fullName}`">
    <div class="info">
      <h1 class="name"> {{ fullName }}</h1>
      <div class="info-item info-item--phone">
        <p><i class="fas fa-mobile-alt"></i> {{ contact.phone }}</p>
      </div>
      <div class="info-item info-item--location">
        <p><i class="fas fa-map-marker-alt"></i> {{ location }}</p>
      </div>
      <div class="info-item info-item--email">
        <p><i class="far fa-envelope"></i> {{ contact.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// 2. Next we are going to import this 'computed' method from vue
import { computed } from 'vue'

export default {
  props: { contact: Object },
  // 1. With Vue 3 we get this setup option that takes in props as an argument.
  // As you might have guessed, the props object contains all of our props
  setup (props) {
    // 3. Then we will create a const, which will take in a callback that returns our computed output.
    const fullName = computed(() => `${props.contact?.name?.first} ${props.contact?.name?.last}`)
    const location = computed(() => `${props.contact?.location?.city},  ${props.contact?.location?.country}`)

    // 4. Lastly, we will return both to make them available in our template.
    return { fullName, location }
  }
}
</script>

<style lang="postcss" scoped>
  .contact-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 100%;
    background-color: white;
    margin-bottom: 3rem;
  }
  .avatar {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 6px solid white;
    border-radius: 100%;
    max-width: 100%;
    align-self: center;
    object-fit: cover;
    top: -35px;
  }

  .info {
    padding: 3.5rem 2rem 2rem 2rem;
    display: flex;
    flex-wrap: wrap;

    .fas, .far {
      color: darkgray;
      margin-right: 0.3rem;
      font-size: 1.2rem;
    }
    .name {
      letter-spacing: 0.13rem;
      text-align: center;
      margin-bottom: 1rem;
      width: 100%;
    }

    .info-item {
      font-size: 0.9rem;
      width: 50%;
      margin-bottom: 1rem;
      padding-right: 1rem;

      &--phone {
        width: 40%;
      }

      &--location {
        width: 60%;
      }
      &--email {
        width: 100%;
      }
    }
  }
</style>
