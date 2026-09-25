<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {count: 0}
    },
    methods: {
        increaseCount() {
            this.count++
        }
    }
})
</script>

<template>

<h1>Assignment 2: Events using Options API</h1>


<!-- tag::v-on-options-api[] -->

<button v-on:click="increaseCount">Increment</button>
<p>Count: {{ count }}</p>
<!-- end::v-on-options-api[] -->


</template>