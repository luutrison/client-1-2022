<script setup>
import Login from "@/components/page/components/login/login.vue";
import { dataToEsm } from "@rollup/pluginutils";
</script>

<template>
    <Login></Login>
</template>

<script>
export default {
    inject: {
        giaodien: "giaodien"
    },

    beforeMount(){
        this.giaodien.bocuc.setLayout("none")
    }

}
</script>