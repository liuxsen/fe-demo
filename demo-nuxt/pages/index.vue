<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    aaa
    <i class="icon-empty"></i>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <img src="/demo.jpg"/>
  </div>
</template>
