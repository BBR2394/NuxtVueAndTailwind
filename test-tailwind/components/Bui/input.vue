<template>
    <div class="border-4 rounded-lg border-purple-500 ">
        <span v-if="title" :class="titleClass()">
            {{ title }}
        </span>
        <input
            :class="inputClass()"
            type="text"
            v-model="testModel">
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    msg?: string
    labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  title: "",
  labels: () => ['one', 'two']
})


const input = ref("")
const testModel = defineModel()

function inputClass() {
    if (props.title) {
        return "py-1 rounded-r-lg"+
        " border-t-2 border-r-2 border-b-2  " +
        "border-cyan-500"
    } else {
        return " py-1 rounded-lg border-2 border-cyan-500"
    }
}

function titleClass() {
    return "py-2 rounded-l-lg border-2 border-orange-500 "
}

</script>

<style>

</style>