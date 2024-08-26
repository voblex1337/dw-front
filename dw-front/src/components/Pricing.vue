<template>
    <div class="shadow-lg w-full max-w-full h-full flex flex-col items-center justify-center gap-y-20 px-10 md:px-8 overflow-hidden">
  
        <div class="flex flex-col items-center justify-center gap-y-2 z-10 text-center relative">
            <span class="text-titles-color text-2xl px-4 py-1.5 rounded-3xl bg-custom-gradient-titles border-2 border-violet-300">Pricing</span>
            <h1 class="text-center text-6xl custom-gradient-text-title">Select a Subscription</h1>
        </div>


        <div class="absolute inset-0 flex justify-end items-end overflow-hidden z-10">
            <img src="../assets/img/ParticlesPricing.png" alt="icon" class="absolute w-full" />
        </div>
        
  
        <div class="flex flex-wrap justify-between w-full z-10 bg-[#09090D] bg-opacity-30 rounded-xl overflow-hidden custom-border">
            <div class="flex flex-grow items-center">
                <img src="../assets/img/Pricing/BuyAvatar.png" class="w-2/12 h-2/12">
                <SubSelector class="z-50"/>
                <img src="../assets/img/Dots/PricingDots.png" alt="icon" class="absolute z-0 w-full h-fit"/>
            </div>

            <div class="flex justify-center items-center px-20 z-50">
                <BuyButtonPopup />
            </div>
        </div>
    </div>
</template>
        
<script setup lang="ts">
import { ref, computed} from 'vue';

import BuyButtonPopup from './Buy/BuyButtonPopup.vue';
import SubSelector from './Buy/SubSelector.vue';
import { useSubscriptionStore } from '@/stores/SubStore'

const subscriptionStore = useSubscriptionStore();
const selectedPlan = computed(() => subscriptionStore.selectedPlan);

const buySubscription = () => {
  if (!selectedPlan.value) return;

  console.log('Покупка подписки:', selectedPlan.value);
};

</script>

<style scoped>

.custom-border {
    border: 1.2px solid #A39BD61A;
}

</style>
        