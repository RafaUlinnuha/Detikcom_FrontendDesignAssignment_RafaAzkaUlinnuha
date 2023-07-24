<script setup>
import Hero from './Hero.vue';
import About from './About.vue';
import Mekanisme from './Mekanisme.vue';
import RunningLogo from './RunningLogo.vue';
import Aggregator from './Aggregator.vue';
</script>

<template>
  <main>
    <div class="bg-[#F4FBFF]">
      <Hero />
      <About id="About" />
      <Mekanisme id="Mekanisme" />
      <RunningLogo />
      <Aggregator id="LatestUpdate" />
    </div>
  </main>
</template>

