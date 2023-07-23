<script setup>
import Navbar from './components/Navbar.Vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Mekanisme from './components/Mekanisme.vue';
import RunningLogo from './components/RunningLogo.vue';
import Aggregator from './components/Aggregator.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Navbar />
    <Hero />
  </header>

  <main>
    <About />
    <Mekanisme />
    <RunningLogo />
    <Aggregator />
    <Footer />
  </main>
</template>

