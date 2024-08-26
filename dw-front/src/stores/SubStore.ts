// stores/subscriptionStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

type Plan = {
  sub_type: string;
  price: number;
  name: string;
};

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlan = ref<Plan | null>(null);

  const selectPlan = (plan: Plan) => {
    selectedPlan.value = plan;
  };

  return {
    selectedPlan,
    selectPlan,
  };
});
