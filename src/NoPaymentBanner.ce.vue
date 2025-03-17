<template>
  <aside
    role="alert"
    :style="{
      overflow: 'hidden',
      backgroundColor: '#d9d9d9',
      height: isOpen ? 'fit-content' : '0',
      transition: 'height 0.3s ease-in-out',
    }"
  >
    <div
      :style="{
        gap: '1em',
        height: '100%',
        display: 'flex',
        margin: '0 auto',
        padding: '0 1em',
        maxWidth: '1200px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }"
    >
      <h2 :style="{ 'font-size': '18px', 'font-family': 'sans-serif', fontWeight: 'normal' }">
        <b>ATENÇÃO:</b>
        A Bext não solicita pagamento
        <br :style="{ display: windowWidth > 768 ? 'block' : 'none' }" />
        antecipado para aprovações de crédito!
      </h2>
      <button
        title="Fechar"
        @click="isOpen = !isOpen"
        :style="{
          padding: '0',
          width: '1.3em',
          border: 'none',
          display: 'flex',
          height: '1.3em',
          cursor: 'pointer',
          backgroundColor: '#d9d9d9',
        }"
      >
        <svg
          :style="{
            width: '100%',
            height: '100%',
          }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const isOpen = ref(true)
const windowWidth = ref(window.innerWidth)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
