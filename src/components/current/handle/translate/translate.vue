<template>
    <slot></slot>
</template>


<script>
import { langConfig } from '@/src/module/underscore/translate/translate'
export default {
    setup() {
        langConfig.init()
    },
    data() {
    },

}
</script>