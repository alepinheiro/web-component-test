<template>
  <div
    :style="{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      'background-color': '#0f28a0',
      height: '4em',
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
      <h2>TheBanner</h2>
      <button>x</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
