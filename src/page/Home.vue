<template>
  <main>
    <!--    上部-->
    <section class="bg-light">
      <div class="container">
        <div class="py-3 py-lg-5">
          <!--          标题-->
          <div class="mb-4">
            <div class="badge bg-secondary mb-1 text-white px-3">魔法科技</div>
            <h1>拍出會動的照片｜LivePhotos 魔法拍立得</h1>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <img src="../assets/images/produt_image.jpg"
                   class="img-fluid mb-3 rounded-xl" alt="">
            </div>
            <div class="col-lg-5 d-flex flex-column justify-content-between">
              <span class="d-block text-secondary fs-14"> 目標 $600,000</span>
              <span class="d-block fw-bold py-3 fs-32">$280,047</span>
              <!-- 進度條 -->
              <div class="progress mb-4">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100">41%
                </div>
              </div>
              <div class="row">
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
              <div class="col-lg-5 d-flex justify-content-between">
                <div class="" tabindex="0" data-toggle="tooltip" title="tooltip">
                  <img src="../assets/images/icon_good01.svg" height="24">
                  <span class="d-lg-none px-1 fs-12">認證標章</span>
                </div>
                <div class="" tabindex="0" data-toggle="tooltip" title="tooltip">
                  <img src="../assets/images/icon_good02.svg" height="24">
                  <span class="d-lg-none px-1 fs-12">品質保證</span>
                </div>
                <div class="" tabindex="0" data-toggle="tooltip" title="tooltip">
                  <img src="../assets/images/icon_good03.svg" height="24">
                  <span class="d-lg-none px-1 fs-12">原生創意</span>
                </div>
                <div class="" tabindex="0" data-toggle="tooltip" title="tooltip">
                  <img src="../assets/images/icon_good04.svg" height="24" alt="">
                  <span class="d-lg-none px-1 fs-12">人氣王</span>
                </div>
              </div>
              <!-- 官方資訊 -->
              <div class="mt-4 p-3 text-secondary rounded bg-white border-3 border-start border-primary">
                <p class="m-0">專案募資中!</p>
                <p class="m-0"> 在 2021/06/14 23:59 募資結束前，您都可以贊助我們！</p>
              </div>
              <!-- 按鈕 -->
              <div class="mt-4 g-0 row">
                <button type="button" class="btn rounded-pill btn-primary btn-block">
                  贊助專案
                </button>
                <div class="mt-2 g-0 row ">
                  <button class="col-7 btn border-2 rounded-pill btn-outline-secondary">
                    <i class="bi me-2 bi-suit-heart-fill"></i>
                    追蹤專案
                  </button>
                  <button class="col ms-2 btn border-2 rounded-pill btn-outline-secondary">
                    <i class="bi me-2 bi-share-fill"></i>
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    下部-->
    <section>
      <!--      导航栏-->
      <div class="bg-white sticky-top  border-bottom-grey">
        <div class="container">
          <ul class="nav col-lg-4 d-flex justify-content-between justify-content-lg-between">
            <li class="nav-item" v-for="(title,index) in option" :key="index">
              <a @click="active=index" :class="{active:index===active}" class="nav-link py-lg-4 py-3 px-0">{{
                  title
                }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--      内容-->
      <div class="container">
        <div class="row  mt-5">
          <!--        左-->
          <div class="col-lg-8">
            <template v-if="active===0">
              <!--              专案介绍-->
              <InfoCart v-for="item in project" :key="item.id" :item="item"/>
            </template>
            <template v-if="active===1">
              <!--              常见问题-->
              <Problem v-for="item in problems" :key="item.id" :item="item"/>
            </template>
            <template v-if="active===2">
              <!--              进度-->
             <Progress/>
            </template>
            <template v-if="active===3">
              <!--              进度-->
              <Message/>
            </template>
            <div class="mt-4">
              <div class="text-center">
                <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_heart.svg" class="rounded mb-4"
                     alt=""/>
              </div>
              <div class="position-relative mb-3 mb-lg-5">
                <div class=" border-bottom border-4 border-primary"></div>
                <div class=" position-absolute top-50 start-50 translate-middle text-body  bg-white  fs-3">&ensp;贊助專案&ensp;</div>
              </div>
              <!--              表单-->
              <form class="needs-validation" novalidate>
                <div class="mb-3">
                  <label class="form-label" for="inputScheme">贊助方案</label>
                  <select class="bg-gray border-0 form-select" id="inputScheme" required>
                    <option selected disabled value="">請選擇一個方案</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">請選擇一個方案</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="inputName">收件人姓名</label>
                  <input type="text" class="bg-gray border-0 form-control" id="inputName" placeholder="Name" required>
                  <div class="invalid-feedback">请输入有效的收件人姓名</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="inputEmail">連絡信箱</label>
                  <input type="email" class="bg-gray border-0 form-control" id="inputEmail" placeholder="Email" required>
                  <div class="invalid-feedback">请输入有效的邮件地址</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="inputPhone">聯絡電話</label>
                  <input type="number" class="bg-gray border-0 form-control" id="inputPhone" placeholder="Phone" required>
                  <div class="invalid-feedback">请输入有效的聯絡電話</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="inputScheme">付款方式</label>
                  <select class="bg-gray border-0 form-select" id="inputScheme" required>
                    <option selected disabled value="">信用卡支付</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">請選擇一個支付方法</div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn px-5 rounded-pill btn-primary">贊助專案</button>
                </div>
              </form>
            </div>
          </div>
          <!--          右-->
          <div class="col-lg-4">
            <Cart class="mb-3">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img src="../assets/images/store_img.jpg" class="rounded-circle border border-3 border-primary"
                       alt=""/>
                  <div class="ms-3">
                    <span class="d-block mb-1 fs-20">缺錢事務所</span>
                    <span class="d-block">已發起 1 個專案</span>
                  </div>
                </div>
                <p class="text-secondary mt-3">需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</p>
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <i class="bi me-2 text-secondary fs-32 bi-facebook"></i>
                    <i class="bi text-secondary fs-32  bi-browser-chrome"></i>
                  </div>
                  <button class="btn border-1 border-secondary  rounded-pill">
                    <i class="bi bi-chat-dots"></i>
                    聯絡我們
                  </button>
                </div>
              </div>
            </Cart>
            <div
                class="py-1 my-3 fw-bold bg-light text-center rounded-3 border-primary border-3 border-start border-end">
              選擇一個方案來支持
            </div>
            <Cart class="mb-3">
              <img src="../assets/images/plan_img.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <div class="d-flex justify-content-between border-bottom pb-2">
                  <span class="d-block">限時優惠</span>
                  <span class="d-block">2 days 20:05:20</span>
                </div>
                <h5 class="mt-2 fw-bold card-title">買一送一，只有兩百組別錯過</h5>
                <span class="fs-24 m-0 d-block fw-bold">NT$ 1600</span>
                <div class="badge text-secondary d-inline-block bg-gray me-2">已被贊助88次</div>
                <div class="badge d-inline-block bg-secondary ">限量200個</div>
                <p class="card-text text-secondary">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
                <a href="#" class="btn w-100 rounded-pill btn-primary">贊助此專案</a>
              </div>
            </Cart>
            <Cart class="mb-3">
              <img src="../assets/images/plan_img.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <div class="d-flex justify-content-between border-bottom pb-2">
                  <span class="d-block">限時優惠</span>
                  <span class="d-block">2 days 20:05:20</span>
                </div>
                <h5 class="mt-2 fw-bold card-title">買一送一，只有兩百組別錯過</h5>
                <span class="fs-24 m-0 d-block fw-bold">NT$ 1600</span>
                <div class="badge text-secondary d-inline-block bg-gray me-2">已被贊助88次</div>
                <div class="badge d-inline-block bg-secondary ">限量200個</div>
                <p class="card-text text-secondary">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
                <a href="#" class="btn w-100 rounded-pill btn-primary">贊助此專案</a>
              </div>
            </Cart>
            <Cart mb-3>
              <img src="../assets/images/plan_img.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <div class="d-flex justify-content-between border-bottom pb-2">
                  <span class="d-block">限時優惠</span>
                  <span class="d-block">2 days 20:05:20</span>
                </div>
                <h5 class="mt-2 fw-bold card-title">買一送一，只有兩百組別錯過</h5>
                <span class="fs-24 m-0 d-block fw-bold">NT$ 1600</span>
                <div class="badge text-secondary d-inline-block bg-gray me-2">已被贊助88次</div>
                <div class="badge d-inline-block bg-secondary ">限量200個</div>
                <p class="card-text text-secondary">
                  受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
                <a href="#" class="btn w-100 rounded-pill btn-primary">贊助此專案</a>
              </div>
            </Cart>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</template>
<script setup>
import {reactive, ref} from "vue";
import InfoCart from "../components/Introduction.vue";
import Cart from "../components/Cart.vue";
import Footer from "../components/Footer.vue";
import Problem from "../components/Problem.vue";
import Progress from "../components/Progress.vue";
import Message from "../components/Message.vue"
const active = ref(0)
const option = ref(['專案介紹', '常見問答', '目前進度', '留言'])
const problems = reactive([
  {
    id:1,
    icon:'Q1',
    title: "影片拍完之後可以編輯嗎？",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id:2,
    icon:'Q2',
    title: "有提供保固或維修服務嗎？",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id:3,
    icon:'Q3',
    title: "有提供保固或維修服務嗎？",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id:4,
    icon:'Q4',
    title: "印出來的拍立得照片需要充電嗎？",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id:5,
    icon:'Q5',
    title: "運送方式及付款方式有哪些呢？",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id:6,
    icon:'Q6',
    title: "退換貨方式及規則",
    content:'可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
])
const project = reactive([
  {
    id: 1,
    img: "https://i.328888.xyz/2022/12/28/UF0Od.jpeg",
    title: "施了魔法的照片",
    content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，\n' +
        '    外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，\n' +
        '    深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它\n' +
        '    ，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。'
  },
  {
    id: 2,
    img: "https://i.328888.xyz/2022/12/28/UFCzb.jpeg",
    title: "留下當下的美好",
    content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，' +
        '外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加' +
        '，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。'
  },
]);

// Self-executing function
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

</script>
<style scoped>

</style>