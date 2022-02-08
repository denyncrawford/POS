<template>
  <div class="w-screen flex justify-center items-center bg-black py-6 px-10">
    <div>
      <router-link class="link mr-0" tag="button" to="/checkout">
        Checkout
      </router-link>
      <router-link class="link" tag="button" to="/"> Dashboard </router-link>
    </div>
    <div class="ml-auto">
      <div class="flex justify-center items-center">
        <h1 class="font-bold text-white mr-4">Miguel Rangel</h1>
        <div class="rounded-full w-8 h-8 bg-white flex items-center justify-center"> 
          <Icon class="h-5 w-5" name="ri-user-fill" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply hover:bg-white hover:text-black text-white mr-4 font-bold py-1 px-4 rounded-3xl transition;
}

.router-link-exact-active {
  @apply bg-white text-black;
}
</style>