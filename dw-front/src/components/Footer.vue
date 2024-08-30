<template>
    <footer class="absolute bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center border-t border-gray-950">
        <div class="flex flex-col space-y-2 text-custom-white-adventage text-sm">
            <span>Contact email scrait558@gmail.com</span>
            <span>Copyright © 2022-2024</span>
            <span> <a href="https://t.me/jbdsgn" target="_blank"> Design by Jebrik12 </a> </span>
        </div>
        <div class="flex flex-col justify-between space-x-4 items-end">
            <div class="flex flex-col items-end">
                <RouterLink class="text-custom-white-adventage" :to="{name: 'faq', params: { element: 'privacy_policy' } }">Privacy Policy</RouterLink>
                <RouterLink class="text-custom-white-adventage" :to="{name: 'faq', params: { element: 'terms_of_service' } }">Terms of Service</RouterLink>
                <RouterLink class="text-custom-white-adventage" :to="{name: 'faq', params: { element: 'rules_of_use' } }">Rules of Use</RouterLink>
            </div>
            <div class="flex space-x-4">
                <a href="https://discord.gg/zP2VRsMnWW" target="_blank" class="text-2xl"><img src="../assets/img/icons/Footer/discord.png"></a>
                <a href="https://t.me/drainwalk" target="_blank" class="text-2xl"><img src="../assets/img/icons/Footer/telegram.png"></a>
            </div>
        </div>
    </footer>
</template>


        