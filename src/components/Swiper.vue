<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="3"
    :initialSlide="1"
    :loop="true"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :navigation="true"
    :modules="[EffectCoverflow, Navigation, Pagination]"
    class="mySwiper"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide Image" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

const images = ref([
  "../../css/img/easyBills/capa.png",
  "https://media.istockphoto.com/id/1370291012/pt/foto/dice-thrown-over-the-green-table-playing-dice-close-up.jpg?s=2048x2048&w=is&k=20&c=zlMMJfUADASDOja3_tQDD9J1wRxpDy6eQCMD43i50mI=",
  "https://media.istockphoto.com/id/2156740353/pt/foto/two-dice-with-six-points-up-on-green-background.jpg?s=2048x2048&w=is&k=20&c=8u4d2gVmUXVVbopVlFisTRHx-6SB_3jEZ-zW_Fbe3LM=",
  "https://media.istockphoto.com/id/486798354/pt/foto/dados-vermelhos.jpg?s=2048x2048&w=is&k=20&c=cOAOpsqCOoaTwMbANUuYvYJ4U_eZxq1NEw5smYcgxAQ=",
]);
</script>

<style scoped>
.mySwiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #00ca9d !important;
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 202, 157, 0.4) !important;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #00ca9d !important;
}
</style>
