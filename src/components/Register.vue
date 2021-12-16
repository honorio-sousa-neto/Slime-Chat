<template>
    
    <div class="q-pa-md">
        <q-form
            class="q-gutter-md "
            @submit.prevent="register"  
        > 
          <q-input
            filled
            placeholder="Nome"
            v-model="user.name" 
          />

          <q-input
            filled
            type="email"
            placeholder="Email" 
            v-model="user.email"
          />
          <q-input
            filled
            type="password"
            placeholder="Password"
            v-model="user.password" 
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
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    
  },
  setup () {
    const user = reactive({
        name: '',
        email: '',
        password: ''
    })

    const router = useRouter()
    const store = useStore()
    
    const register = () => {
      store.dispatch('auth/registerUser', {
        name: user.name,
        email: user.email,
        password: user.password
      })
      
      router.push('/users')
      console.log('register')
    }

    return {
      register,
      user
    }
  }
})
</script>
