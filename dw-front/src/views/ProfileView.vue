<template>
  <main class="relative min-h-screen select-none overflow-hidden pb-40" ref="main">
    <Navbar :activeSection="null" />
    
    <div class="flex flex-wrap w-full h-full px-8 mt-[95px] gap-x-2">
      <Avatar />
      <Information />

      <notifications group="success"  position="bottom left" class="z-50"/>
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { notify } from "@kyvg/vue3-notification";

import Navbar from '../components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Avatar from '@/components/Profile/Avatar.vue';
import Information from '@/components/Profile/Information.vue';
import { useUserStore } from '@/stores/UserStore'
import AuthService from '@/services/AuthService';

const route = useRoute()
const userStore = useUserStore()


onMounted(() => {
    const username = route.params.username as string
    const currentUser = AuthService.getUsername();

    if (username === currentUser) {
        userStore.fetchPrivateUserInfo();
    } else {
        userStore.fetchUser(username);
    }

    if (sessionStorage.getItem('passwordChanged') === 'true') {
        notify({
            group: "success",
            type: "success",
            title: "Change Password",
            text: "Пароль успешно изменен.",
        });
        sessionStorage.removeItem('passwordChanged');
    }
})

</script>
