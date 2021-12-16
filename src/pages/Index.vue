<template>
  <q-card flat class="q-px-sm">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey q-mt-md"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="sign" label="Entrar" />
      <q-tab name="register" label="Registrar" />
    </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="sign">
            <Login/>
          </q-tab-panel>

          <q-tab-panel name="register">
            <Register/>  
          </q-tab-panel>

          
        </q-tab-panels>
      </q-card>

</template>

<script>
import { defineComponent, ref } from 'vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Login,
    Register
  },
  setup () {
    return {
      tab: ref("sign")
    }
  }
})
</script>
