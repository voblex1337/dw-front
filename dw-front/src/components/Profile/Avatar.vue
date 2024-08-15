<template>
    <div class="flex flex-col gap-y-3 lg:w-fit w-full md:px-0 p-4">
        <div class="relative border-bottom-custom-adventage flex flex-col md:flex-row items-center bg-custom-black-adventage p-6 gap-y-3 md:gap-x-5 rounded-xl z-30">
            
            <img src="@/assets/img/Profile/glow.svg" class="absolute inset-0 z-40 w-fit h-fit" >
            
            <img src="@/assets/img/ReviewsAvatars/test.jpeg" class="w-24 h-24 rounded-full ring-2 ring-[#D4CDFF] ring-offset-4 ring-offset-[#09090D]">


            <div class="relative flex flex-col text-center md:text-left z-10">
                <div class="flex flex-col md:flex-row gap-y-1 md:gap-x-1 text-3xl">
                    <!-- <h1 class="text-white">{{ user.username }}</h1> -->
                    <h1 class="text-white">Jebrik12</h1>
                    <!-- <h1 class="custom-gradient-text-title-main">[ {{ user.role }}]</h1> -->
                    <h1 class="custom-gradient-text-title-main">[Designer]</h1>
                </div>
                <h1 class="text-[#4F4F53] p-1.5 bg-[#131317] w-fit h-fit rounded-md text-xl">UID: 12</h1>
            </div>
        </div>

        <div class="w-full flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-2">
            <div class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1">
                <img src="@/assets/img/icons/Profile/download.svg">
                <h1 class="text-white text-xl">Download</h1>
            </div>

            <div class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1">
                <img src="@/assets/img/icons/Profile/beta.svg">
                <h1 class="text-white text-xl">Buy Beta</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/UserStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id as string

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUser(userId)
})

const user = userStore.userComputed

</script>
