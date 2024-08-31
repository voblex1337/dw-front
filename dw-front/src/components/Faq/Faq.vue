<template>
    <section class="p-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="mb-24">
                <div class="text-center">
                    <h1 class="custom-gradient-text-title text-6xl">Frequently Asked Questions</h1>
                </div>
            </div>

            <div class="accordion-group space-y-10" data-accordion="default-accordion">
                <div
                    v-for="faq in faqs"
                    :key="faq.id"
                    class="accordion py-8 px-6 border-bottom-custom-adventage transition-all duration-100 rounded-2xl"
                    :class="{ 'space-y-5': faq.isOpen }"
                    >
                    <button
                        @click="toggleFaq(faq.id)"
                        class="accordion-toggle group inline-flex items-center justify-between leading-8 text-white w-full transition duration-100 text-left hover:custom-gradient-text-title-main font-bold"
                        :class="{ 'custom-gradient-text-title-main': faq.isOpen }"
                        :aria-controls="'basic-collapse-' + faq.id + '-with-arrow'">
                        <h5 class="text-3xl">{{ faq.question }}</h5>

                        <svg
                            class="text-gray-500 transition duration-100 group-hover:text-indigo-300"
                            :class="{ 'rotate-180': faq.isOpen }"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>

                    <div
                        :id="'basic-collapse-' + faq.id + '-with-arrow'"
                        class="accordion-content w-full px-0 overflow-hidden transition-max-height duration-100 ease-in-out"
                        :style="{ maxHeight: faq.isOpen ? '250px' : '0px' }"
                        :aria-labelledby="'basic-heading-' + faq.id + '-with-arrow'"
                        >
                        <p class="text-xl text-white leading-6">{{ faq.answer }}</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const faqs = ref([
    {
        id: 1,
        question: 'How to launch Drainwalk Software after Purchase?',
        answer: 'After purchasing a subscription, download the installer from your profile and run it. The program will be installed on your computer, and "DrainWalk" will appear in your applications list. Use it to launch our software.',
        isOpen: false,
    },
    {
        id: 2,
        question: 'How can I contact Support?',
        answer: 'You can contact support in our Discord channel or in our Telegram chat.',
        isOpen: false,
    },
    {
        id: 3,
        question: 'How do I update my Profile Information?',
        answer: 'Your profile information is updated automatically as you play. You do not need to do anything. We advise you not to forcefully turn off Drainwalk (alf + f4) as information about the session may not be saved.',
        isOpen: false,
    },
    {
        id: 4,
        question: 'Who can see my Profile Information?',
        answer: 'Clients can view public information about any user by entering their usernames in the URL. However, your private information (Email, HWID, Password) remains visible only to you.',
        isOpen: false,
    },
]);

// Функция для переключения состояния открытия/закрытия аккордеона
const toggleFaq = (faqId: number) => {
    const faq = faqs.value.find(f => f.id === faqId);
    if (faq) {
        faq.isOpen = !faq.isOpen;
    }
};
</script>
