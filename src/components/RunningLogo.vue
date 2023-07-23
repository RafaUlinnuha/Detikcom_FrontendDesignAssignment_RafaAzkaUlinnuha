<template>
    <div class="bg-[#F4FBFF] py-20">
        <h1 class="max-w-screen-sm text-[#007CBD] text-lg leading-5 font-bold mx-auto text-center mb-[50px]">Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor
Serta Menjadi Narasumber di Detikfinance</h1>
        <div class="mb-[50px]">
            <Vue3Marquee
                :pause-on-click="true"
                :duration="70"
            >
                <img src="/Logo/Frame 12320.png" class="mr-6" alt="Logo 1">
                <img src="/Logo/Frame 12321.png" class="mr-6" alt="Logo 2">
                <img src="/Logo/Frame 12322.png" class="mr-6" alt="Logo 3">
                <img src="/Logo/Frame 12323.png" class="mr-6" alt="Logo 4">
                <img src="/Logo/Frame 12324.png" class="mr-6" alt="Logo 5">
                <img src="/Logo/Frame 12325.png" class="mr-6" alt="Logo 6">
                <img src="/Logo/Frame 12326.png" class="mr-6" alt="Logo 7">
                <img src="/Logo/Frame 12327.png" class="mr-6" alt="Logo 8">
            </Vue3Marquee>
        </div>
        <div class="flex justify-center">
            <button href="#" class="py-4 px-5 text-xs font-semibold text-center text-white rounded bg-[#3EB7DD] hover:bg-blue-700 duration-300">
                Daftarkan startup kamu
            </button>
        </div>
    </div>
    
</template>
  
<script>
    import { Vue3Marquee } from 'vue3-marquee'

    export default {
        components: {
            Vue3Marquee,
        },
    }
</script>