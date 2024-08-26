<template>
    <div class="flex flex-col gap-y-4 ml-16">
        <h1 class="custom-gradient-text-title text-3xl mb-4">DrainWalk</h1>

        <div
            v-for="plan in plans"
            :key="plan.name"
            class="flex items-center cursor-pointer"
            @click="selectPlan(plan)">
            
            <img
                :src="subscriptionStore.selectedPlan?.sub_type === plan.sub_type ? selectedDotIcon : dotIcon"
                alt="dot icon"
                class="mr-3 w-4 h-4"
            />
            <span
                :class="[
                'text-2xl transition-colors duration-200',
                subscriptionStore.selectedPlan?.sub_type === plan.sub_type
                    ? 'text-white'
                    : 'text-custom-white-adventage hover:text-white'
                ]"
            >
                {{ plan.name }} | {{ plan.price }}₽
            
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSubscriptionStore } from '@/stores/SubStore';

import dotIcon from '@/assets/img/icons/Pricing/Radio.svg';
import selectedDotIcon from '@/assets/img/icons/Pricing/ActiveRadio.svg';

const subscriptionStore = useSubscriptionStore();

const plans = ref([
  { sub_type: 'MONTH', price: 199, name: '1 month' },
  { sub_type: 'THREE_MONTHS', price: 299, name: '3 months' },
  { sub_type: 'YEAR', price: 499, name: '12 months' },
]);

const selectedPlan = computed({
  get: () => subscriptionStore.selectedPlan
});


const selectPlan = (plan) => {
  subscriptionStore.setSubType(plan.sub_type);
  console.log(subscriptionStore.selectedPlan);
};
</script>

