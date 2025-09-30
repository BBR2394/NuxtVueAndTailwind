<template>
    <div>------</div>
    <div v-if="data" class="dateLoaded">
        <div v-for="value in data">
            value : {{ value }}<br/>
        </div>
    </div>
    <div v-else>
        chargement en cours
    </div>
    
    <button class="bg-cyan-500 hover:bg-green-300 rounded-lg m-3 p-2 px-4" 
    v-on:click="refreshCom">
        refresh
    </button>
    <button class="bg-cyan-500 hover:bg-green-300 rounded-lg m-3 p-2 px-4" 
    v-on:click="refresh">
        refresh 2
    </button>
    <div v-if="data">
        data {{ data }}
    </div>
    <div>------</div>
</template>

<script setup lang="ts">

const compLoaded = ref({})

console.log("Depuis la page des entreprises")

const { 
    status: pending, 
    data: dataServer, 
    error: errorCom, 
    refresh: refreshCom 
} = await useLazyFetch(() => {
    console.log("on va requeter")
    return '/api/companies/all'
    //return '/api/test'
}, {
    query: { "page": 1, size: 10 },
    method : 'GET'
})

const { data, refresh } = await useFetch('/api/companies/all')

watch(dataServer, (newDataServer) => {
    console.log("new data server")
    console.log(newDataServer)


  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
})

</script>

<style>

</style>