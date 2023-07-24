<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
<section>
    <div class="max-w-screen-lg py-24 mx-auto px-6 md:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 px-0 md:px-24 xl:px-0">
            <div class="m-auto">
                <img src="/About/Video.png" class="w-full lg:w-[90%] xl:w-full" alt="About Video">
            </div>
            <div class="mt-2 md:my-auto space-y-2 xl:space-y-4">
                <h1 class="text-[#007CBD] font-bold text-base">About Detikfinance Business Plan Competition 2023</h1>
                <p class="text-xs font-medium">Detikfinance kali ini akan memberikan ruang bagi startup untuk networking dan memamerkan produk inovasinya di hadapan venture capital dan angel investor. Acara ini juga akan menghadirkan para pengembang teknologi dan pelaku bisnis untuk memberikan edukasi dan inspirasi bagi masyarakat Indonesia dan teknofilia mengenai perkembangan teknologi di Indonesia.</p>
                <div class="flex text-xs items-center space-x-4">
                    <span class="text-[#007CBD]">Share</span>
                    <a href="#">
                        <Icon icon="ph:twitter-logo" class="text-xl text-[#007CBD]" />
                    </a>
                    <a href="#">
                        <Icon icon="ic:baseline-whatsapp" class="text-xl text-[#007CBD]" />
                    </a>
                    <a href="#">
                        <Icon icon="ph:facebook-logo" class="text-xl text-[#007CBD]" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>