<template>
  <div>
    {{ message }}
  </div>
  <div>
    <Popup :title="'pop up de test'" :is-displayed="displayPopup">
      <div>
        bonjour
      </div>
      <button class="rounded bg-red-500" v-on:click="displayPopup = false">close</button>
    </Popup>
  </div>
  <button
    class="mx-3 px-4 py-2 rounded bg-green-400"
    v-on:click="displayPopup = true">
    display pop up
  </button>

  <Empty></Empty>
  <People></People>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            message : "bonjour ceci cela",
            displayPopup: false
        }
    }
})
</script>

<style>

</style>