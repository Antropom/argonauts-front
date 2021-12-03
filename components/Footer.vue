<template>
  <v-footer color="primary lighten-2" :absolute="true" padless class="mt-10">
    <v-row justify="center" align="center" no-gutters>
      <v-col
        class="primary lighten-2 py-6 text-center white--text"
        cols="12"
        sm="8"
        offset-sm="2"
      >
        2021 — <strong>Louis Collet</strong>
      </v-col>
      <v-col cols="12" sm="2" class="primary lighten-2 pr-3">
        <v-row justify="center">
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            class="white--text"
            color="primary"
            label="Dark mode"
          ></v-switch>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
