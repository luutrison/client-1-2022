<script setup>
import Search from '../../act/search/search.vue';

</script>
<template>
    <div :class="_c(['menu-left'])">
        <Search></Search>
        <div>Vi dien tu</div>
        <div>Mua ban</div>
        <div>Mang xa hoi</div>
        <div>Hom thu</div>
        <div>Video ngan</div>
        <div>Sach</div>
        <div>Phim</div>
        <div>Nhac</div>
        <div>Truc tiep</div>
        <div>Cong viec</div>
        <div>Hen ho</div>
        <div>Nha o</div>
        <div>Xe co</div>
    </div>
</template>
<script>
import { _cname } from '~~/giaodien/giaodien';

export default {
    data() {
        return {
            _c: _cname(this.$style)
        };
    },
}
</script>


<style module lang="scss">
@import "./menuLeft.scss";
</style>

