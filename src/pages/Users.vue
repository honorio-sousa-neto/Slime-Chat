<template>
  <q-page>
    <div class="q-pa-md">
   

        <q-list separator>
        <q-item
          v-for="contact in contacts"
          :key="contact.id"
          class="q-my-sm"
          clickable
          to='/chat'
          v-ripple
        >
            <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                    {{ contact.name.charAt(0) }}
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>{{ contact.name }}</q-item-label>
            </q-item-section>

            <q-item-section side>
               <q-icon name="chat_bubble" color="green" />
            </q-item-section>
        </q-item>

        <q-separator />
        

        
        </q-list>
  </div>
  </q-page>
</template>

<script>
const contacts = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  
  }, {
  id: 2,
  name: 'Mallorie Alessandrini',
  
  }, {
  id: 3,
  name: 'Elisabetta Wicklen',
 
  }, 
  {
    id: 4,
    name: 'Seka Fawdrey',
    } 
]

export default {
setup () {
    return {
      contacts,
    }
  }
}
</script>

<style>

</style>