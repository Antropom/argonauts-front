<template>
  <div>
    <v-app-bar-title class="mt-2 mb-5">
      <h1 class="text-center">Les Argonautes</h1>
    </v-app-bar-title>
    <NewArgonaut class="my-10" />
    <List />
    <Footer />
  </div>
</template>

<script>
import NewArgonaut from '@/components/NewArgonaut.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NewArgonaut,
    List,
    Footer,
  },
}
</script>

<style scoped></style>
