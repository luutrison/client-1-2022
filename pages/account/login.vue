<script setup>
import Login from "@/src/pages/account/login/login.vue";
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