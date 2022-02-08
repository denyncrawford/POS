<template>
  <div
    class="w-full h-full absolute flex justify-center items-center bg-white"
  >
    <div class="w-full h-full grid grid-cols-6 gap-4">
      <div class="col-span-4 px-10 pt-10">
        <h1 class=" text-3xl font-bold">Products</h1>
      </div>
      <div class="col-span-2 p-10 flex flex-col">
        <div class="bg-black w-full h-full rounded-2xl"></div>
        <div class="flex w-full">
          <button class="w-full rounded-3xl bg-green-500 font-bold text-white px-10 py-2 mt-5" > Pay </button>
          <button class="rounded-3xl bg-gray-100 font-bold px-5 py-2 ml-2 mt-5" > <Icon class="h-5 w-5" name="hi-dots-vertical" /> </button>
        </div>
      </div>
    </div>
  </div>
</template>