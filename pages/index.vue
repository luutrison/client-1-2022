<template>
    <Profile></Profile>
</template>

<script>
import Profile from '~~/components/md/content/hoso/profile/profile.vue';
export default {
    inject: {
        giaodien: "giaodien"
    },
    data() {
        return {
            className: {
                fontSize: "60px",
                position: "absolute",
                left: "500px",
                top: "500px",
            }
        };
    },
    beforeMount(){
        this.giaodien.bocuc.setLayout("md")
    },
    components: { Profile }
}
</script>