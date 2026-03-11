<template>

  <Head>
    <Meta charset="UTF-8"/>
    <Meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <Meta property="og:title" content="Download Chefpilot"/>
    <Meta property="og:type" content="website"/>
    <Meta property="og:description" content="Chefpilot intelligently catalogs your kitchen inventory and serves up personalized, chef-quality recipes
            based on exactly what's in your pantry. No more waste, no more grocery stress."/>
    <Meta property="og:url" content="https://chefpilot.live"/>
    <Meta property="og:image" content="https://flobaze.atl1.cdn.digitaloceanspaces.com/public/44shots_so.webp"/>
    <Meta name="twitter:card" content="summary_large_image"/>
    <Meta property="og:site_name" content="chefpilot"/>
    <Meta name="twitter:image:alt" content="Screenshot of chefpilot"/>
    <Title>Download Chefpilot</Title>
    <Link rel="icon" type="image/png"
          href="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/chefpilot_icon.png"/>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <Link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"/>
  </Head>
  <section class="pt-32 pb-20 px-6">
    <p class="text-center">Downloading...</p>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "download",
  methods: {
    getOS(): string {

      if (this.$device.isWindows) return 'https://www.chefpilot.live/';
      if (this.$device.isMacOS) return 'https://apps.apple.com/us/app/chefpilot/id6759763909';
      if (this.$device.isLinux) return 'https://www.chefpilot.live/';
      if (this.$device.isAndroid) return 'https://play.google.com/store/apps/details?id=live.chefpilot.app&pcampaignid=web_share';
      if (this.$device.isIos) return 'https://apps.apple.com/us/app/chefpilot/id6759763909';

      return 'https://www.chefpilot.live/';

    }
  },
  mounted(): void {

    window.location.href = this.getOS();

  }
})
</script>

<style scoped>

</style>