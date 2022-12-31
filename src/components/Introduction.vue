<template>
  <img :src="item.img" class="rounded-xl w-100 img-fluid" alt="">
  <h3 class="my-4 fw-bold ps-3 border-start border-primary border-4">{{item.title}}</h3>
  <p class="text-secondary">{{item.content}}</p>
</template>

<script setup>
defineProps({
  item:{
    type:Object,
    required:true,
  }
})
</script>

<style scoped>

</style>