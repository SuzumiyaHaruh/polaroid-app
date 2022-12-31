<template>
  <header class="border-bottom border-primary border-5">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.jpg" alt="" height="40">
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-md-3">
              <a class="nav-link" href="#">關於</a>
            </li>
            <li class="nav-item px-md-3">
              <a class="nav-link" href="#">挖寶</a>
            </li>
            <li class="nav-item px-md-3">
              <a class="nav-link" href="#">我有個大膽的想法</a>
            </li>
          </ul>
          <div class="ms-auto py-2 py-md-0">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn px-4 py-1 border-2 rounded-pill btn-primary">登入</button>
            <button class="btn px-4 py-1 border-2 rounded-pill btn-outline-secondary ms-3">註冊</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!--  弹窗-->
  <Modal/>
</template>

<script setup>
import Modal from "../components/Modal.vue"
</script>

<style scoped>

</style>