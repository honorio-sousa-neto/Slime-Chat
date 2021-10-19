<template>
  <q-page class="flex column">
      <q-footer elevated>
        <q-toolbar>
            
            <q-input
              placeholder="Escreva algo..."
            bg-color="white"
              rounded
                outlined
              dense
              class="full-width"
              color="primary"
            >
                <template v-slot:after>
                    <q-icon name="send" color="white"/>
                </template>
            </q-input>
        
        </q-toolbar>
      </q-footer>
    <div class="q-pa-md column col justify-end">
      <div style="width: 100%; max-width: 400px" class="column justify-end">
        <q-chat-message name="me" :text="['hey, how are you?']" sent />
        <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>