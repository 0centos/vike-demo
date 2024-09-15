<template>
  <div id="page-container">
    <div id="page-content" class="p-5 pb-12 min-h-screen">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
/* Page Transition Animation */
body.page-is-transitioning #page-content {
  opacity: 0;
}
</style>

<style scoped>
/* Page Transition Animation */
#page-content {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
</style>
