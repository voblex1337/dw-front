<template>
  <button
    :disabled="!isPlanSelected"
    :class="[
      'flex items-center rounded-md px-4 py-2 text-3xl transition-shadow duration-200 text-white',
      isPlanSelected
        ? 'shadow-[0_4px_15px_rgba(255,255,255,0.5)] cursor-pointer bg-custom-gradient'
        : 'shadow-none cursor-not-allowed opacity-80 bg-custom-gradient'
    ]"
    @click="handleClick">
      Buy
    <img src="@/assets/img/icons/buyico.svg" alt="icon" class="ml-2 w-10 h-10">
  </button>
  
  <!-- Модальное окно -->
  <div
    v-if="showModal"
    class="fixed left-0 top-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    @click.self="showModal=false">
    <div
      class="bg-custom-black-adventage rounded-xl shadow-lg w-full md:max-w-md mx-auto p-8 relative z-60"
      @click.stop>
      <div class="flex flex-col gap-y-3">
        <div>
          <div class="flex flex-row items-center justify-between">
            <label for="referral" class="block text-white mb-1">Refferal code</label>
            <a href="#" class="text-[#A39BD6]">No code? Do nothing</a>
          </div>
          <div class="relative mb-4">
            <input 
              id="referral"
              v-model="ref_code" 
              placeholder="Refferal code" 
              type="text" 
              class="w-full border-gray-300 rounded-md px-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
            >
            <img 
              src="@/assets/img/icons/Pricing/RefferalIcon.svg" 
              alt="Referral Icon" 
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5">
          </div>
        </div>

        <button 
          class="flex items-center justify-center text-white bg-custom-gradient rounded-md px-4 py-1.5 text-2xl shadow-custom w-full"
          @click="setReferralCode(ref_code)">
          Activate
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSubscriptionStore } from '@/stores/SubStore';

const subscriptionStore = useSubscriptionStore();
const isPlanSelected = computed(() => !!subscriptionStore.selectedPlan);
const showModal = ref(false);

const ref_code = ref('')

const handleClick = () => {
    if (isPlanSelected.value) {
        showModal.value = true;
    }
};

const setReferralCode = (code) => {
    subscriptionStore.setRefCode(code);
    getPayment()
};

const getPayment = () => {
    const sub_info = subscriptionStore.selectedPlan
    console.log(sub_info)
}
</script>

