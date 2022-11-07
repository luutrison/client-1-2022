<script setup>
import { nc } from '~~/src/giaodien/giaodien';

</script>

<template>
    <div :class="nc('simple-container')">
        <slot></slot>
        <div :class="nc('py-4 d-block')"></div>
    </div>
</template>

<script>


</script>