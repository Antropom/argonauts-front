<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1 class="text-center">Ajouter un·e Argonaute</h1>
        <v-form
          ref="signUpForm"
          v-model="formValidity"
          class="mt-3 mb-1 mx-auto"
          style="max-width: 325px"
          @submit.prevent="addArgonaut"
        >
          <v-text-field v-model="name" label="Nom" required :rules="nameRules">
          </v-text-field>
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
      nameRules: [
        (value) =>
          value.length >= 2 || "Le nom doit être composé d'au moins 2 lettres.",
        (value) =>
          value.match(/^[a-zA-Z\s]*$/) || 'Le nom doit être composé de lettres',
      ],
      formValidity: false,
    }
  },
  methods: {
    async addArgonaut() {
      if (this.formValidity) {
        const argonaut = this.name.trim()
        await this.$store.dispatch('argonauts/addArgonaut', argonaut)
        this.name = ''
        this.$refs.signUpForm.resetValidation()
      }
    },
  },
}
</script>
