<template>
  <v-form class="w-100" @submit.prevent="sendMessage">
    <v-text-field
      color="success"
      label="Write your message here"
      append-icon="mdi-send"
      hide-details
      @click:append="sendMessage"
      v-model="message"
    ></v-text-field>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
const sendMessage = () => {
  console.log(message.value);
  message.value = "";
};
</script>

<style></style>
