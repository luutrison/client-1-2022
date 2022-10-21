<template>
<slot></slot>
</template>


<script>
import {langConfig} from '@/module/underscore/translate/translate'
export default {
    setup(){
        langConfig.init()
    },
    data(){
        return {
            langConfig
        }
    },
    provide() {
        return{
            translate: langConfig
        }
    },

}
</script>