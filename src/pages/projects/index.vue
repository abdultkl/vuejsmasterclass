<script setup lang="ts"></script>

<template>
  <div>
    <h2>Projects:</h2>
    <RouterLink to="/">Home</RouterLink><br />
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }"
      >Go to Project 1</RouterLink
    >
  </div>
</template>
