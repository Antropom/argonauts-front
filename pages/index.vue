<template>
  <v-container>
    <v-app-bar-title class="mt-2 mb-5">
      <h1 class="text-center">Les Argonautes</h1>
    </v-app-bar-title>
    <NewArgonaut />
    <List />
  </v-container>
</template>

<script>
import NewArgonaut from '@/components/NewArgonaut.vue'
import List from '@/components/List.vue'

export default {
  components: {
    NewArgonaut,
    List,
  },
}
</script>

<style scoped></style>
