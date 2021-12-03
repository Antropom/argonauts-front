<template>
  <v-container v-if="argonauts" style="max-width: 600px">
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">Membres de l'équipage</h2>
      </v-col>
      <v-col v-for="argonaut in argonauts" :key="argonaut.id" cols="6" sm="4">
        <v-card-text>
          <div class="text-center">{{ argonaut.name }}</div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      argonauts: (state) => state.argonauts.argonauts,
    }),
  },
}
</script>
