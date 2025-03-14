<template>
  <aside
    role="alert"
    :style="{
      'background-color': '#d9d9d9',
      transition: 'height 0.3s ease-in-out',
      overflow: 'hidden',
      height: isOpen ? '4em' : '0',
    }"
  >
    <div
      :style="{
        'max-width': '1280px',
        margin: '0 auto',
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between',
        'align-items': 'center',
        height: '100%',
        padding: '0 1em',
      }"
    >
      <h2 :style="{ 'font-size': '22px' }">
        <b>ATENÇÃO:</b>
        A Bext não solicita pagamento <br />
        antecipado para aprovações de crédito!
      </h2>
      <button @click="isOpen = !isOpen" :style="{ 'background-color': '#d9d9d9', border: 'none' }">
        x
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(true)
</script>
