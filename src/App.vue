<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <header>
    <nav class="hidden md:block bg-[#007CBD] fixed w-full z-20 top-0 left-0">
        <div class="max-w-screen-xl p-4 md:px-12 lg:px-28 xl:px-0 flex flex-wrap items-center justify-between mx-auto">
          <router-link to="/">
            <a class="flex items-center">
                <img src="/Navbar-Brand.png" class="h-8 md:h-10" alt="detikfinance Logo">
            </a>
          </router-link>
            <div class="flex space-x-8 font-medium text-sm">
                <div class="items-center justify-between flex w-auto">
                    <ul class="flex space-x-8 text-white">
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Mekanisme">Mechanism</a>
                        </li>
                        <li>
                            <a href="#LatestUpdate">Latest Update</a>
                        </li>
                    </ul>
                </div>
                <router-link to="/register">
                  <a class="hidden md:block text-[#007CBD] bg-white duration-300 font-medium rounded-full px-6 py-2 text-center transition ease-in-out hover:scale-110">Register</a>
                </router-link>
            </div>
        </div>
    </nav>
  </header>

  <router-view />

  <footer class="bg-[#007CBD]">
    <div class="w-full px-12 mx-auto p-4 md:py-8 text-white">
        <div class="flex-col items-center md:items-start">
            <a href="#">
                <img src="/Footer-Logo.png" class="h-14 md:mb-8 md:mt-0 my-6" alt="detikfinance Logo">
              </a>
              <div class="flex-row md:flex justify-between">
                  <p class="text-xs lg:text-sm font-medium md:w-9/12 lg:w-10/12 xl:w-7/12">Detikfinance memberikan ruang kepada para startup di Indonesia untuk menunjukkan, serta mempromosikan brand mereka untuk mendapatkan perhatian dari venture capital atau angel investor</p>
                <ul class="flex flex-wrap items-center my-4  text-sm font-medium text-gray-500 gap-8">
                    <li>
                        <a href="#">
                            <Icon icon="ph:twitter-logo-thin" class="text-2xl text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon icon="ph:instagram-logo-thin" class="text-2xl text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon icon="ph:facebook-logo-thin" class="text-2xl text-white" />
                        </a>
                    </li>
                </ul>
              </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-4" />
        <span class="block text-xs font-light text-left">© 2023 Detikcom. All rights reserved</span>
    </div>
  </footer>
</template>

