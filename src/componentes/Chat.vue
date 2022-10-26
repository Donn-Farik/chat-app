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
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase";
const userChat = ref(auth.currentUser);
const messages = ref([]);

const q = query(collection(db, "chat"), orderBy("time"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      console.log("Message:", change.doc.id, change.doc.data());
      messages.value.push({
        id: change.doc.id,
        ...change.doc.data(),
      });
    }
  });
});
</script>

<style></style>
