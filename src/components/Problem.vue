<template>
  <div class="accordion mt-3" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <div class="accordion-header d-flex" :id="`heading${item.id}`">
        <button @click="active = !active" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${item.id}`"
                aria-expanded="true" :aria-controls="`#collapse${item.id}`">
          <div class="badge bg-primary me-2">{{item.icon}}</div>
          {{item.title}}
        </button>
      </div>
      <div :id="`#collapse${item.id}`" :class="{show:active===true}" class="accordion-collapse text-secondary collapse" :aria-labelledby="`heading${item.id}`">
        <div class="accordion-body">
          <strong>{{item.content}}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props=defineProps({
  item:{
    type:Object,
    required:true,
  }
})
const active =ref(false)
console.log(props.item)
</script>

<style scoped>

</style>