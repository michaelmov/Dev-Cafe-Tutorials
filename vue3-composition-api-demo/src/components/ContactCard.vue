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
import { computed } from 'vue'

export default {
  props: { contact: Object },
  setup (props) {
    const fullName = computed(() => `${props.contact?.name?.first} ${props.contact?.name?.last}`)
    const location = computed(() => `${props.contact?.location?.city},  ${props.contact?.location?.country}`)

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
