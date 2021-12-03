<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1 class="text-center">Ajouter un·e Argonaute</h1>
        <v-form
          class="mt-3 mb-1 mx-auto"
          style="max-width: 325px"
          @submit.prevent="addArgonaut"
        >
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
