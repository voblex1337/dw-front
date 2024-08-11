<template>
    <div class="shadow-lg w-full max-w-full h-full flex flex-col items-center justify-center gap-y-20 px-10 md:px-8 overflow-hidden">
  
        <div class="flex flex-col items-center justify-center gap-y-2 z-50 text-center">
            <span class="text-titles-color text-2xl px-4 py-1.5 rounded-3xl bg-custom-gradient-titles border-2 border-violet-300">Pricing</span>
            <h1 class="text-center text-6xl custom-gradient-text-title">Select a Subscription</h1>
        </div>

        <div class="absolute inset-0 flex justify-end items-end overflow-hidden z-10">
            <img src="../assets/img/glow.png" alt="icon" class="z-10 w-1/2 -mr-16"/>
            <img src="../assets/img/ParticlesPricing.png" alt="icon" class="absolute w-full" />
        </div>
        
  
        <div class="flex flex-wrap justify-between w-full z-10 bg-[#09090D] bg-opacity-30 rounded-xl overflow-hidden custom-border">
            <div class="flex flex-grow">
                <img src="../assets/img/BuyAvatar.png" class="w-2/12 h-2/12">
                <div class="flex flex-col py-10 gap-y-4 ml-16">
                    <h1 class="custom-gradient-text-title text-3xl">DrainWalk</h1>
                    <ul class="custom-marker list-disc text-custom-white-adventage text-2xl">
                        <li>1 month | 199₽</li>
                        <li>3 months | 299₽</li>
                        <li>12 month | 499₽</li>
                    </ul>
                </div>
            </div>

            <div class="flex justify-center items-center px-20">
                <button class="flex items-center text-white bg-custom-gradient rounded-md px-4 py-2 text-3xl shadow-custom">
                    Buy
                    <img src="../assets/img/icons/buyico.svg" alt="icon" class="ml-2 w-10 h-10">
                </button>
            </div>

        </div>
    </div>
</template>
        
<script setup lang="ts">

</script>

<style scoped>
    .custom-marker {
        list-style-image: url(../assets/img/radio.png); /* Цвет маркера */
    }
    .custom-border {
        border: 1.2px solid #A39BD61A;
    }
</style>
        