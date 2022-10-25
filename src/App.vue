<template>
  <v-app>
    <v-app-bar class="pl-5" color="primary">
      <v-app-bar-title>Farik</v-app-bar-title>

      <v-btn @click="googleAccess" v-if="!userGoogle">Sign in</v-btn>
      <v-btn @click="googleOut" v-if="userGoogle">log out</v-btn>
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
import {
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
const userGoogle = ref(false);

const googleOut = async () => {
  await signOut(auth);
};
onAuthStateChanged(auth, (user) => {
  console.log(user);
  userGoogle.value = user;
});
</script>
