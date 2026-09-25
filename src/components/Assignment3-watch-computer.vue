<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const count = ref(0)
const doubled = computed(() => count.value * 2)
const lastWatched = ref('watcher has not run yet')

watch(count, (value, oldValue) => {
    lastWatched.value = `${oldValue} -> ${value}`
})

function increaseCount() {
    count.value++
}
</script>

<template>

<h1>Assignment 3: watch vs computed</h1>

<p>Count: {{ count }}</p>
<p>Doubled (computed): {{ doubled }}</p>
<p>Last watch: {{ lastWatched }}</p>
<button @click="increaseCount">Increment</button>

</template>
