<template>
  <div class="shadow-lg w-full max-w-full h-full flex flex-col items-center justify-center gap-y-20 px-10 md:px-8">

    <!-- Заголовок и подзаголовок -->
    <div class="flex flex-col items-center justify-center gap-y-2 z-10 text-center">
      <span class="text-titles-color text-2xl px-4 py-1.5 rounded-3xl bg-custom-gradient-titles border-2 border-violet-300">About Us</span>
      <h1 class="text-center text-6xl custom-gradient-text-title">Why DrainWalk?</h1>
    </div>

    <img src="../assets/img/glow.png" alt="icon" class="absolute z-10 h-1/4 pointer-events-none"/>
    <img src="../assets/img/Dots/AdventagesDots.png" alt="icon" class="absolute w-full z-0 pointer-events-none" />

    <!-- Основной контент -->
    <div class="flex flex-col w-full gap-y-20 select-text">

      <!-- Карточки -->
      <div class="flex flex-wrap gap-x-16 gap-y-20">

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Combat.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Combat.svg" alt="icon" class="w-7 h-7 mr-2">
              Combat
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Combat.svg" alt="icon" class="w-7 h-7 mr-2">
              Performance
            </h1>
            <!-- <p class="text-custom-white-adventage">
              With drainwalk you will always defeat everyone, because our cheat bypasses a huge number of anti-cheats.
            </p> -->
            <p class="text-custom-white-adventage">
              С DW Cleaner ваш компьютер всегда будет работать быстрее, так как наша программа эффективно удаляет ненужные файлы и мусор, освобождая ресурсы системы.
            </p>
          </div>
        </div>

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Visuals.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Visuals.svg" alt="icon" class="w-7 h-7 mr-2">
              Visuals
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Visuals.svg" alt="icon" class="w-7 h-7 mr-2">
              Storage
            </h1>
            <!-- <p class="text-custom-white-adventage">
              Explore stunning visual features of the client. We made huge reliance on visual features.
            </p> -->
            <p class="text-custom-white-adventage">
              Оцените превосходные функции очистки. Мы уделили особое внимание освобождению места на диске, что помогает вашему ПК работать более эффективно.
            </p>
          </div>
        </div>

        <div class="flex flex-col px-2 border-bottom-custom-adventage rounded-xl bg-custom-black-adventage flex-1 min-w-[250px] z-10">
          <img src="@/assets/img/Adventages/Movement.png" alt="icon" class="pointer-events-none">
          <div class="px-4 pb-4">
            <!-- <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Movement.svg" alt="icon" class="w-7 h-7 mr-2 ">
              Movement
            </h1> -->
            <h1 class="text-white flex items-center text-2xl">
              <img src="@/assets/img/icons/Adventages/Movement.svg" alt="icon" class="w-7 h-7 mr-2 ">
              Optimization
            </h1>
            <p class="text-custom-white-adventage">
              Мы также предлагаем функции оптимизации, которые ускоряют загрузку системы, улучшая производительность даже на старых компьютерах.
            </p>
            <!-- <p class="text-custom-white-adventage">
              We also provide you with fly, speed, and other functions that perfectly bypass FunTime and other servers.
            </p> -->
          </div>
        </div>

      </div>

      <!-- Статистика -->
      <div class="flex flex-wrap justify-center gap-6 md:gap-x-28 gap-y-4 z-10">

        <span class="text-white flex flex-row text-xl items-center gap-2">
          <img src="../assets/img/Adventages/Users.png" alt="Users icon" class="w-6 h-6">
          Users: 0
        </span>
        <img src="../assets/img/Adventages/separator.png" alt="Separator" class="hidden md:block">

        <span class="text-white flex flex-row text-xl items-center gap-2">
          <img src="../assets/img/Adventages/Launches.png" alt="Launches icon" class="w-6 h-6">
          Launches: 0
        </span>
        <img src="../assets/img/Adventages/separator.png" alt="Separator" class="hidden md:block">

        <span class="text-white flex flex-row text-xl items-center gap-2">
          <img src="../assets/img/Adventages/Updates.png" alt="Updates icon" class="w-6 h-6">
          Updates: 0
        </span>
        <img src="../assets/img/Adventages/separator.png" alt="Separator" class="hidden md:block">

        <span class="text-white flex flex-row text-xl items-center gap-2">
          <img src="../assets/img/Adventages/Days.png" alt="Days icon" class="w-6 h-6">
          Days: 1
        </span>
        
      </div>
    </div>
  </div>
</template>
      
<script setup lang="ts">

</script>

      