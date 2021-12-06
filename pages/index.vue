<template>
  <div>
    <v-app-bar-title class="mt-2 mb-5">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <v-row justify-sm="end">
            <v-col>
              <v-img
                src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
                height="30px"
                contain
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <h1 class="text-center">Les Argonautes</h1>
        </v-col>
        <v-col cols="0" sm="4"></v-col>
      </v-row>
    </v-app-bar-title>
    <NewArgonaut class="mb-10 sm-mt-10" />
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
