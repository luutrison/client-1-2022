<script setup>
import Search from '../../act/search/search.vue';

</script>
<template>
    <!-- <div :class="mc('menu-left')">
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
    </div> -->

    <div :class="mc('menu-left')">
        <div :class="[mc('item'), nc('d-flex jc-space-between w-100')]">
            <div :class="[nc('skeleton'), mc('skeleton-icon')]"></div>
            <div :class="[nc('skeleton'), mc('skeleton-title')]"></div>
        </div>

        <div :class="[mc('item'), nc('d-flex jc-space-between w-100')]">
            <div :class="[nc('skeleton'), mc('skeleton-icon')]"></div>
            <div :class="[nc('skeleton'), mc('skeleton-title')]"></div>
        </div>

        <div :class="[mc('item'), nc('d-flex jc-space-between w-100')]">
            <div :class="[nc('skeleton'), mc('skeleton-icon')]"></div>
            <div :class="[nc('skeleton'), mc('skeleton-title')]"></div>
        </div>

        <div :class="[mc('item'), nc('d-flex jc-space-between w-100')]">
            <div :class="[nc('skeleton'), mc('skeleton-icon')]"></div>
            <div :class="[nc('skeleton'), mc('skeleton-title')]"></div>
        </div>

        <div :class="[mc('item'), nc('d-flex jc-space-between w-100')]">
            <div :class="[nc('skeleton'), mc('skeleton-icon')]"></div>
            <div :class="[nc('skeleton'), mc('skeleton-title')]"></div>
        </div>
        
    </div>
   
    


</template>
<script>
import { cname, nc } from '~~/src/giaodien/giaodien';

export default {
    data() {
        return {
            mc: cname(this.$style)
        };
    },
}
</script>


<style module lang="scss">
@import "./menuLeft.scss";
</style>

