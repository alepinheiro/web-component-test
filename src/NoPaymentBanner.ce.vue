<template>
  <div class="no-payment-banner__wrapper">
    <div class="no-payment-banner__content">
      <h2>TheBanner</h2>
      <button>x</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.no-payment-banner__wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0f28a0;
  height: 4em;
}

.no-payment-banner__content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
