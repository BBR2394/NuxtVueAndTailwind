<template>
<div>
    <NuxtLayout>
        <p>
        {{ message }}
    </p>  
    <button @click="navigateTo({ path: `/test` })">page de test</button>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>

    <div class="border border-indigo-600 rounded-lg shadow transition hover:shadow-lg mx-6 mt-40 ">
        <div class="min-w-80 m-3">
            ici
            fvds <br/>
            vfdsvf
            ds
        </div>
    </div>

    <Badgesize>
    </Badgesize>
    <Card  >
    <div class="mt-3 ms-6 ">
        <p class="font-serif text-3xl">Titre : {{ title }}</p>
      </div>
      <div class="min-w-80 m-3 border-red-900">
        message : {{ message }}
      </div>    
      <div class="m-1 border-b-4  border-indigo-500">
        ceci est un test ici encore
      </div>
      <div >
        ceci est un test ici encore
      </div>
      <div >
        ceci est un test ici encore
      </div>
      <button class="bg-sky-500 hover:bg-yellow-300 rounded-lg m-3 p-2 px-4"
                v-on:click="showModal = true">
          Ouvrir la modal
      </button>
    </Card>
    <Modal :display="showModal" :name-transition="'modal-fast'">
      <div class="text-left">
        <p>bonjour</p>
        <p>bonjour</p>
        <p>bonjour</p>
        <p>bonjour</p>
        <p>bonjour</p><p>bonjour</p>
        <p>bonjour</p>
        <p>bonjour</p>
        <div class="flex justify-end">
          <button class="bg-red-300 rounded-lg hover:bg-green-300 m-3 p-2 px-4">
            Annuler
          </button>
          <button class="bg-sky-500 hover:bg-red-300 rounded-lg m-3 p-2 px-4"
              v-on:click="showModal = false">
              Fermeture de la modal
          </button>
        </div>
      </div>
    </Modal>
    showModal :: {{ showModal }}
    <Card :type="'danger'">
        test
    </Card>
    
    <div class="my-4">

    </div>

    </NuxtLayout>
</div>    
</template>

<script setup lang="ts">

const title = ref('le titre')
const message = ref("Bonjour et bienvenu")
const showModal = ref(false)

</script>

<style>

</style>