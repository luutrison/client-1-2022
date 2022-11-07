<template>
    <Profile></Profile>
</template>

<script>
import Profile from '~~/src/components/md/content/hoso/profile/profile.vue';
export default {
    inject: {
        giaodien: "giaodien"
    },
    beforeMount(){
        this.giaodien.bocuc.setLayout("md")
    },
    components: { Profile }
}
</script>