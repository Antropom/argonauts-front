<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">
        <h1 class="text-center">Ajouter un·e Argonaute</h1>
        <v-form class="mt-3 mb-1" cols="8" @submit.prevent="addArgonaut">
          <v-text-field v-model="name" label="Nom" required> </v-text-field>
          <v-row justify="end">
            <v-btn type="submit" color="primary" class="mr-3 mt-3"
              >Ajouter</v-btn
            >
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    async addArgonaut() {
      await this.$store.dispatch('argonauts/addArgonaut', this.name)
      this.name = ''
    },
  },
}
</script>
