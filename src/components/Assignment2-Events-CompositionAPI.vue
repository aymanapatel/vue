<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
function increaseCount() {
    count.value++
}
</script>

<template>

<h1>Assignment 2: Events using Options API</h1>


<!-- tag::v-on-options-api[] -->

<button v-on:click="increaseCount">Increment using v-on:click</button>
<button @click="increaseCount">Increment using @click</button>
<p>Count: {{ count }}</p>
<!-- end::v-on-options-api[] -->


</template>