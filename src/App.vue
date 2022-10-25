<template>
  <v-app>
    <v-app-bar class="pl-5" color="primary">
      <v-app-bar-title>Farik</v-app-bar-title>
      <v-btn>Acceder</v-btn>
    </v-app-bar>
    <v-main app>
      <v-container>
        <Chat />
      </v-container>
    </v-main>
    <v-footer class="d-flex flex-column" app>
      <FormAdd />
    </v-footer>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
import Chat from "./componentes/Chat.vue";
import FormAdd from "./componentes/FormAdd.vue";
</script>
