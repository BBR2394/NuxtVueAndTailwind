<template>
  <div>
    <Teleport to="body">
      <Transition name="backmodalcolor">
        <Transition :name="props.nameTransition">
          <div v-if="display">
            <div :class="classForModal(true)" 
            v-on:click="displayClick()">
              <div class="flex min-h-full 
                          items-end justify-center 
                          p-4 text-center 
                          items-center p-0">
                <div class="relative 
                    transform overflow-hidden 
                    border border-grey-600
                    rounded-lg bg-white shadow-xl 
                    transition-all 
                    sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="p-4 ">
                        <slot></slot>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">

interface Props {
  display: boolean
  nameTransition?: string
  //deletionForbidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  nameTransition: "modal"
})

function classForModal(displayBack: boolean) {
  if (displayBack)
    return "fixed inset-0 z-10 w-screen overflow-y-auto bg-sky-500/50"
  else 
    return "fixed inset-0 z-10 w-screen overflow-y-auto"
}

function displayClick() {
  console.log("on a cliqué")
}


</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.9s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-fast-enter-active,
.modal-fast-leave-active {
  transition: opacity 0.5s ease;
}

.modal-fast-enter-from,
.modal-fast-leave-to {
  opacity: 0;
}

.modal-slow-enter-active,
.modal-slow-leave-active {
  transition: opacity 0.85s ease;
}

.modal-slow-enter-from,
.modal-slow-leave-to {
  opacity: 0;
}


.backmodalcolor-enter-active {
  transition: all 0.45s ease-out;
}

.backmodalcolor-leave-active {
  transition: all 0.15s ease-out;
}

.backmodalcolor-enter-from {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
}

.backmodalcolor-leave-to {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
}

</style>