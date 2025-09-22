<template>
  <div >
    <p>pop up de test </p>
    isDisplayed = {{ isDisplayed }}
    <Teleport to="body">
        <div class="rounded bg-cyan-500 rounded mx-8 my-8 block" v-show="isDisplayed">
            <p>{{ title ? title : "Pop Up" }}</p>
            <slot />
        </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  title?: string
  isDisplayed: boolean
 // the full id : type + id_legal
}>()

const display = ref(false)


</script>

<style>

</style>