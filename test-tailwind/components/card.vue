<template>
  <div>
    <Transition>
      <div class="border  rounded-lg shadow 
      transition hover:shadow-lg mx-6 mt-40 "
          :class="typeCard()">
        <slot >
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  type?:string
  //mainComponent: boolean
  //deletionForbidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  type:"primary"
  // mainComponent : true,
  // deletionForbidden: false
})

const message = ref('bonjour depuis la carte')


function typeCard() {
  if (props.type === "primary") {
    return "border-blue-600"
  } else if (props.type === "danger") {
    return "border-red-600"
  } else {
    return "border-cyan-600"
  }
}

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>