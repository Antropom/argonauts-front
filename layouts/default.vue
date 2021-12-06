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

  head: {
    title: 'Les Argonautes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Les membres de l'équipage des Argonautes",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>
