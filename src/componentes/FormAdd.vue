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
import { addDoc, collection } from "@firebase/firestore";
import { db, auth } from "../firebase";
const message = ref("");
const sendMessage = async () => {
  console.log(message.value);
  try {
    await addDoc(collection(db, "chat"), {
      text: message.value,
      time: Date.now(),
      uid: auth.currentUser.displayName,
    });
    message.value = "";
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
