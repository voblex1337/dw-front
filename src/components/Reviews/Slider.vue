<template>
    <div class="scroller-container z-50 gap-y-8 px-40 overflow-hidden">
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
          <Review v-for="(review,) in reviews" :review="review"/>

          <Review v-for="(review,) in reviews" :review="review"/>
        </div>
        
      </div>
    </div>
  </template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Review from '@/components/Reviews/SingleReview.vue'

const reviews = [
    { 
        text: "Drainwalk keeps me ahead of the game! Even the most advanced anti-cheats can't stop me now.",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },

    { 
        text: "I've been using Drainwalk for months and haven't been caught once! Highly recommend it to anyone who wants to dominate.",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },

    { 
        text: "I never thought it would be this easy to bypass all the anti-cheats. Drainwalk is a game-changer!",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },

    { 
        text: "Now I'm always at the top of the leaderboard. Thanks to Drainwalk for giving me the edge!",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },

    { 
        text: "Thanks to Drainwalk, the game has become so much more fun! No more fear of getting banned.",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },

    { 
        text: "A reliable tool that truly works. Drainwalk is the best cheat I've ever used!",
        avatar: "/src/assets/img/ReviewsAvatars/test.jpeg"
    },
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
  --_animation-duration: 50s;
}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% / 4));
  }
}

</style>
