<template>
  <main>
    <section class="bg-light">
      <div class="container">
        <div class="py-3 py-lg-5">
          <!--          标题-->
          <div class="mb-4">
            <span class="badge bg-secondary mb-1 text-white px-3">魔法科技</span>
            <h1>拍出會動的照片｜LivePhotos 魔法拍立得</h1>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/produt_image.jpg"
                   class="img-fluid mb-3 rounded-xl" alt="">
            </div>
            <div class="col-lg-5 d-flex flex-column">
              <span class="d-block text-secondary fs-14"> 目標 $600,000</span>
              <span class="d-block fw-bold py-3 fs-32">$280,047</span>
              <!-- 進度條 -->
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100">41%
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-6">
                  <span class="d-block text-secondary fs-14"> 贊助人數</span>
                  <span class="d-block fw-bold py-3 fs-32">1374 人</span>
                </div>
                <div class="col-6">
                  <span class="d-block text-secondary fs-14"> 募資倒數</span>
                  <span class="d-block fw-bold py-3 fs-32">27 天</span>
                </div>
              </div>
              <!-- 獎章 icons -->
              <div class="row col-lg-5">
                <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="tooltip">
                  <img class="col-3" src="../assets/images/icon_good01.svg" height="24">
                </span>
                <!--                <img class="col-3" src="../assets/images/icon_good02.svg" height="24">-->
                <!--                <img class="col-3" src="../assets/images/icon_good03.svg" height="24">-->
                <!--                <img class="col-3" src="../assets/images/icon_good04.svg" height="24">-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {reactive} from "vue";

const tooltips = reactive(['認證標章', '品質保證', '原生創意', '人氣王'])
</script>

<style scoped>

</style>