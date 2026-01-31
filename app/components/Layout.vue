<template>
  <Head>
    <Meta charset="UTF-8"/>
    <Meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <Title>Chefpilot | AI-Powered Kitchen Inventory & Recipes</Title>

    <Link rel="icon" type="image/png" href="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/chefpilot_icon.png"/>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <Link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet"/>

  </Head>
  <body class="bg-sage text-gray-900 selection:bg-emerald-200">

  <nav class="fixed w-full z-50 bg-sage/80 backdrop-blur-md border-b border-emerald-100" style="top: 0!important;">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/">
      <div class="flex items-center gap-3">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/chefpilot_icon.png" alt="Logo" class="w-10 h-10 rounded-xl shadow-sm">
        <span class="text-2xl font-extrabold tracking-tight text-emerald-primary">Chefpilot</span>
      </div>
      </a>

      <div class="hidden md:flex items-center gap-8 font-medium text-emerald-primary/80">
        <a href="#features" class="hover:text-emerald-primary transition-colors">Features</a>
      </div>
    </div>
  </nav>

  <slot/>
  <section class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-emerald-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-emerald-accent/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <h2 class="text-4xl lg:text-5xl font-extrabold mb-8 relative z-10">Start your journey to zero food waste today.</h2>
        <p class="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
          Join other home chefs who have transformed their cooking experience with Chefpilot.
        </p>
        <div class="flex justify-center gap-6 relative z-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" class="h-12 cursor-pointer hover:scale-105 transition-transform" alt="App Store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-12 cursor-pointer hover:scale-105 transition-transform" alt="Google Play">
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white border-t border-emerald-50 py-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-2">
        <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/chefpilot_icon.png" alt="Logo" class="w-8 h-8 rounded-lg">
        <span class="font-bold text-xl text-emerald-primary">Chefpilot</span>
      </div>
      <div class="text-gray-400 text-sm">
        &copy; 2026 Chefpilot AI. All rights reserved. Your kitchen, automated.
      </div>
      <div class="flex gap-6 text-gray-500 font-medium">
        <nuxt-link href="/privacy" class="hover:text-emerald-primary">Privacy</nuxt-link>
        <nuxt-link href="/terms" class="hover:text-emerald-primary">Terms</nuxt-link>
        <nuxt-link href="/contact" class="hover:text-emerald-primary">Contact</nuxt-link>
      </div>
    </div>
  </footer>
  </body>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Layout",
  updated() {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  },
  mounted() {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }
})
</script>

<style>
body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth }
.bg-sage { background-color: #F2F5F0; }
.text-emerald-primary { color: #2D5A27; }
.bg-emerald-primary { background-color: #2D5A27; }
.bg-emerald-accent { background-color: #4ade80; }

.gradient-text {
  color: #4ade80;
  background: #4ade80;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.phone-mockup {
  border: 8px solid #1a1a1a;
  border-radius: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #fff;
}

.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>