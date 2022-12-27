<script setup>
defineProps({
    data: Object,
    user: Object | Boolean,
})
</script>
<template>
    <header class="container border-top text-center">
        <h1>404 not found</h1>
    </header>

  <main class="container">
    <section class="hero">
      <img class="hero-image" src="/404.png" alt="Image404">
      <div class="hero-info">
        <h1 class="text text__title">I have bad news for you </h1>
        <p class="text text__description">The page you are looking for might be removed or is temporarily unavailable</p>
        <router-link to="/" class="button mx-2">Back to homepage</router-link>
        <router-link :to="{name: 'blog'}" class="button mx-2">Go to Blog</router-link>
        <router-link :to="{name: 'register'}" class="button">Register</router-link>
      </div>
    </section>
  </main>
  <footer class="container tasite-footer">
    <hr>
<p class="mb-0 pb-2">☕ {{ time }}</p>
  </footer>

</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap");body{background:#f5f5f5;font-family:"Space Mono",monospace}*{box-sizing:border-box}a{text-decoration:none;color:#051d6b}.container{width:85%;max-width:1200px;margin-left:auto;margin-right:auto}.hero{display:grid;height:80vh;align-items:center;grid-template-columns:minmax(100px, 3fr) 2fr;grid-auto-rows:minmax(0, 1fr);place-content:center}@media screen and (max-width: 768px){.hero{grid-template-columns:1fr;height:auto}}.hero-image{width:100%;height:100%;object-fit:contain}.text{font-size:1.5rem;color:#333}.text__title{font-size:3rem;font-weight:bold}.text__header{font-family:"Inconsolata",monospace;font-weight:700}.button{display:inline-flex;align-items:center;background:#333;color:#f5f5f5;text-transform:uppercase;height:48px;padding:1.5rem;margin-top:32px}
</style>
<script>
export default {
    data() {
        return {
            time: null,
        }
    },
    mounted() {
        setInterval(() => {
            this.time = new Date().toLocaleString()
        }, 1000)
    }
}
</script>