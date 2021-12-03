<template>
  <v-app dark>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('argonauts/fetchArgonauts')
  },
}
</script>
