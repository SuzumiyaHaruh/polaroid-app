<template>
  <!-- Modal -->
  <Teleport to="body">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="exampleModalLabel">登入</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!--            登录表单-->
            <Login/>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import Login from '../components/Login.vue'
</script>

<style scoped>

</style>