<template>
    <div class="q-pa-md">
        <q-form
            class="q-gutter-md" 
            @submit.prevent="register"
        >
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
                label="Entrar"
            />
        </q-form>
    </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const store = useStore()
        const router = useRouter()
        const user = reactive({
            email: "",
            password: ""
        })
        const register = async () => {
            const aux = await store.dispatch('auth/signUser', {
                email: user.email,
                password: user.password
            })
            if (aux.user) 
                router.push('/users')
        }
        return {
            user,
            register
        }
    },
})
</script>