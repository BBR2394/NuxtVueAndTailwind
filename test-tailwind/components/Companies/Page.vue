<template>
    <div>------</div>
    <div v-if="dataServer" class="dateLoaded">
        <div v-for="value in dataServer">
            value : {{ value }}<br/>
        </div>
        ici
        <table class="p-5 ml-14 border-collapse  border-cyan-400 ">
            <thead>
                <tr>
                    <th class="border border-gray-500 ">Id</th>
                    <th class="border border-gray-500 ">Nom</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(value, index) in dataServer">
                    <tr>
                        <td class="border border-gray-300 text-red-500">{{value.com_id}}</td>
                        <td class="border border-gray-300 text-orange-500">{{value.com_name}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
    <div v-else>
        chargement en cours
    </div>
    dataServer {{ dataServer }}
    <BuiTable></BuiTable>
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

//const { data, refresh } = await useFetch('/api/companies/all')

watch(dataServer, (newDataServer) => {
    console.log("new data server")
    console.log(newDataServer)


  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
})

</script>

<style>

</style>