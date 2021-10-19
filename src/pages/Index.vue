<template>
    <q-card flat class="q-ma-md">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Registro" />
      </q-tabs>

      

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <q-card flat bordered>
            <div class="q-pa-md">
              <q-form
                class="q-gutter-md "
                @submit.prevent="login"  
              > 
                <q-input
                  filled
                  type="email"
                  placeholder="Email" />
                <q-input
                  filled
                  type="password"
                  placeholder="Password" 
                />
                  <q-btn
                    type="submit"
                    label="Login"
                    color="primary"
                    text-color="white"
                    class="center"
                  />
              </q-form>
            </div>
          </q-card>
        </q-tab-panel>

       
        <q-tab-panel name="register">
         <q-card flat bordered>
            <div class="q-pa-md">
              <q-form
                class="q-gutter-md "
                @submit.prevent="register"  
              > 
                <q-input
                  filled
                  placeholder="Nome" />

                <q-input
                  filled
                  type="email"
                  placeholder="Email" />
                <q-input
                  filled
                  type="password"
                  placeholder="Password" 
                />
                  <q-btn
                    type="submit"
                    label="Registrar"
                    color="primary"
                    text-color="white"
                    class="center"
                  />
              </q-form>
            </div>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    
  },
  setup () {
    
    const router = useRouter()
    const store = useStore()

    const login = () => {
      store.dispatch('auth/loginUser', {
        email: 'honorio@test.com',
        password: '123456'
      })
    }
    
    const register = () => {
      store.dispatch('auth/registerUser', {
        name: 'Honorio',
        email: 'honorio@test.com',
        password: '123456'
      })
      
      router.push('/users')
      console.log('register')
    }

    return {
      tab: ref('login'),
      login,
      register
    }
  }
})
</script>
