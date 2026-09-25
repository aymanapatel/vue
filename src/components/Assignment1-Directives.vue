<script setup lang="ts">

let message = "test1"
let listOfNumbers = [1, 3, 5]
</script>

<template>

<h1>Assignment 1</h1>


<!-- tag::v-if-else-directive[] -->
<p v-if="message.length % 2 == 0">Even: {{ message }}</p>
<p v-else>Odd: {{ message }}</p>
<!-- end::v-if-else-directive[] -->

<!-- tag::v-for-directive[] -->
<ul>
    <li v-for="number in listOfNumbers">
        {{ number }}
    </li>
</ul>
<!-- end::v-for-directive[] -->


</template>