
<template>
  <section class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="animate__animated animate__fadeInLeft">
        <div class="inline-flex items-center gap-2 bg-emerald-100 text-emerald-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Meet your new AI Sous-Chef
        </div>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
          Stop asking "What's for dinner?" <span class="gradient-text">Cook what you have.</span>
        </h1>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
          Chefpilot intelligently catalogs your kitchen inventory and serves up personalized, chef-quality recipes based on exactly what's in your pantry. No more waste, no more grocery stress.
        </p>
        <div class="flex justify-center gap-6 relative z-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" class="h-12 cursor-pointer hover:scale-105 transition-transform" alt="App Store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-12 cursor-pointer hover:scale-105 transition-transform" alt="Google Play">
        </div>
      </div>
      <div class="relative flex justify-center lg:justify-end animate__animated animate__fadeInRight">
        <!-- Decorative Circles -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>

        <!-- Main Mockup -->
        <div class="phone-mockup w-[300px] h-[600px] floating relative z-10">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%203.51.18%20PM.jpeg" alt="App Screen" class="w-full h-full object-cover">
        </div>

        <!-- Secondary Mockup -->
        <div class="phone-mockup w-[260px] h-[520px] absolute -bottom-10 -left-10 hidden xl:block shadow-2xl">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%209.45.49%20PM.webp" alt="App Screen" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20 scroll-reveal">
        <h2 class="text-4xl font-extrabold mb-4 text-emerald-primary">Everything you need to master your kitchen</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">From smart AI recipe inspirations, Chefpilot is designed to simplify your culinary life.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <!-- Feature 1 -->
        <div class="scroll-reveal group">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <svg class="w-7 h-7 text-emerald-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Tailored Recipes</h3>
            <p class="text-gray-600">Get highly personalized recipes that you can bring to life without any grocery rush</p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="scroll-reveal group" style="transition-delay: 200ms;">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <svg class="w-7 h-7 text-emerald-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Daily recipe suggestions</h3>
            <p class="text-gray-600">Get personalized recipes every morning to plan your day.</p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="scroll-reveal group" style="transition-delay: 400ms;">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <svg class="w-7 h-7 text-emerald-primary"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Bookmark the recipes you love</h3>
            <p class="text-gray-500">Bookmark the recipes you enjoy an love to keep them closer</p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="scroll-reveal group" style="transition-delay: 400ms;">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <svg class="w-7 h-7 text-emerald-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
              </svg>

            </div>
            <h3 class="text-xl font-bold mb-3">Clear & simple instructions</h3>
            <p class="text-gray-500">Get clear and concise instructions on how to bring your recipe to the table.</p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="scroll-reveal group" style="transition-delay: 400ms;">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">

              <svg class="w-7 h-7 text-emerald-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">High quality recipe photos</h3>
            <p class="text-gray-500">Recipes come with high-quality photos to help you know how it should look</p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="scroll-reveal group" style="transition-delay: 400ms;">
          <div class="bg-sage p-8 rounded-3xl group-hover:bg-emerald-50 transition-colors border border-transparent group-hover:border-emerald-100">
            <div class="w-14 h-14 bg-emerald-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">


              <svg class="w-7 h-7 text-emerald-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Share recipes with friends</h3>
            <p class="text-gray-500">Easily share recipes with family and friends to help you decide.</p>
          </div>
        </div>


      </div>
    </div>
  </section>

  <!-- Showcase Section -->
  <section class="py-24 bg-sage overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div class="order-2 lg:order-1 flex gap-4 animate-scroll-vertical">
        <div class="flex flex-col gap-6 animate__animated animate__fadeInUp">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%205.30.01%20PM.webp" class="w-64 rounded-3xl shadow-xl hover:scale-105 transition-transform" alt="UI">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%205.30.01%20PM%20(4).webp" class="w-64 rounded-3xl shadow-xl hover:scale-105 transition-transform" alt="UI">
        </div>
        <div class="flex flex-col gap-6 mt-12 animate__animated animate__fadeInDown">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%205.30.01%20PM%20(6).webp" class="w-64 rounded-3xl shadow-xl hover:scale-105 transition-transform" alt="UI">
          <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/WhatsApp%20Image%202026-01-30%20at%205.30.01%20PM%20(7).webp" class="w-64 rounded-3xl shadow-xl hover:scale-105 transition-transform" alt="UI">
        </div>
      </div>
      <div class="order-1 lg:order-2 scroll-reveal">
        <h2 class="text-4xl font-extrabold mb-6 leading-tight">It's easier to choose your next meal when theres a lot to choose from. </h2>
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="p-2 bg-emerald-200 rounded-lg text-emerald-primary mt-1">✓</div>
            <div>
              <h4 class="font-bold text-lg">Get highly tailored recipes</h4>
              <p class="text-gray-600">Get a list of recipes to pick and choose from.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="p-2 bg-emerald-200 rounded-lg text-emerald-primary mt-1">✓</div>
            <div>
              <h4 class="font-bold text-lg">Not just food but healthy food</h4>
              <p class="text-gray-600">Get food that is good for you with all the nutrition information to help you navigate your allegies.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="p-2 bg-emerald-200 rounded-lg text-emerald-primary mt-1">✓</div>
            <div>
              <h4 class="font-bold text-lg">Dead-simple step-by-step instructions</h4>
              <p class="text-gray-600">Get step-by-step instructions to bring your recipes to the dinner table </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

<style scoped>

</style>