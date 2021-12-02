<template>
  <v-container>
    <v-app-bar-title class="mt-2 mb-5">
      <h1 class="text-center">Les Argonautes</h1>
    </v-app-bar-title>
    <NewArgonaut />
  </v-container>
</template>

<script>
import NewArgonaut from '../components/NewArgonaut.vue'

export default {
  components: {
    NewArgonaut,
  },
}
</script>

<style scoped></style>
