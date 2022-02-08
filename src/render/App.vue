<template>
  <div class="w-screen h-screen flex flex-col bg-white">
    <navigation />
    <div class="flex-1 relative">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import { useRouter } from "vue-router";
const router = useRouter();
router.push("/checkout");
</script>

<style scoped>
.fade-enter-active {
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .2s; /* don't forget to set a duration! */
}

/* .fade-leave-active {
  animation: zoomOut;
  animation-duration: .2s;
} 
*/
</style>
