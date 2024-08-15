<template>
    <div class="scroller-container z-50 gap-y-8">
      <!-- Верхний скроллер -->
      <div class="scroller" data-direction="left" data-speed="fast">

        <div class="scroller__inner">
          <Review v-for="(review, index) in reviews" :review="review"/>

          <Review v-for="(review, index) in reviews" :review="review"/>
        </div>
        
      </div>

      <!-- Нижний скроллер -->
      <div class="scroller" data-direction="right" data-speed="fast">

        <div class="scroller__inner">
          <Review v-for="(review, index) in reviews" :review="review"/>

          <Review v-for="(review, index) in reviews" :review="review"/>
          <img src="../assets/img/glow.png" alt="icon" class="absolute z-50"/>
        </div>
      </div>
    </div>
  </template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Review from '@/components/SingleReview.vue'

const reviews = [
  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},

  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},

  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},

  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},
  
  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},

  { text: "With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats. With drainwalk you will always defeat everyone.", 
  avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"},
];


onMounted(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});
</script>

<style>
.scroller-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.scroller__inner {
  display: flex;
  gap: 2.5rem; /* Уменьшили пространство между отзывами */
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  animation: scroll var(--_animation-duration, 20s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 50s; /* Ускорили до такой же скорости, как верхний скроллер */
}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% / 4));
  }
}

</style>
