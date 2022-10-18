<template>
<slot></slot>
</template>


<script>
import {langConfig} from '@/module/underscore/translate/translate'
export default {
    async setup(){
       const lang = await langConfig.init()
       console.log(lang, "init");
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