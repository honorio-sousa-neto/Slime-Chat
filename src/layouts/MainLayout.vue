<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="route.fullPath.includes('/chat')"
          icon="arrow_back"
          flat
          to="/users"
        />
        <q-toolbar-title class="absolute-center">
          Slime Chat
        </q-toolbar-title>
        <q-btn
          v-if="route.fullPath.includes('/users')"
          label="Sair"
          flat
          class="absolute-right q-pr-md"
          to="/"
        />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { firebaseDB } from '../boot/firebase'

export default defineComponent({
  name: 'MainLayout',
  setup(){
    const route = useRoute()
    console.log('Firebase DB',firebaseDB)
    return {
      route
    }
  }

})
</script>
