<template>
  <h1 class="text-center">Chat</h1>
  <v-card
    v-for="item of messages"
    :key="item.id"
    width="300"
    :text="item.text"
    class="mb-3"
    theme="dark"
    :subtitle="item.displayName"
    :class="item.uid === userChat.uid && 'ml-auto'"
    :color="item.uid === userChat.uid ? 'success' : '#555'"
  ></v-card>
</template>

<script setup>
import { ref } from "vue";
const userChat = ref({ uid: "002" });
const messages = ref([
  {
    id: 1,
    text: "este es mi primer mensgae",
    uid: "001",
    time: Date.now(),
    displayName: "Farik",
  },
  {
    id: 2,
    text: "este es mi primer mensgae 2",
    uid: "002",
    time: Date.now(),
    displayName: "Ergon",
  },
  {
    id: 2,
    text: "este es mi primer mensgae 3",
    uid: "003",
    time: Date.now(),
    displayName: "Ergon",
  },
]);
</script>

<style></style>
