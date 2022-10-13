<template>
<slot></slot>
</template>


<script>
import translateReactive from './translate.store.ts'
export default {
    setup(){
        translateReactive.init();
    },
    data(){
        return {
            translateReactive
        }
    },
    provide() {
        return{
            translate: translateReactive
        }
    }

}


</script>